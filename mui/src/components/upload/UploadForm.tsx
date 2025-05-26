import { Alert, Box, Button, Paper, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

interface WordPairInput {
  id: number;
  sourceWord: string;
  targetWord: string;
}

const validationSchema = Yup.object({
  jsonInput: Yup.string()
    .required('JSON input is required')
    .test('valid-json', 'Invalid JSON format', function (value) {
      if (!value) return false;
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed);
      } catch {
        return false;
      }
    })
    .test(
      'valid-structure',
      'JSON must be an array of objects with id (number), sourceWord (string), and targetWord (string)',
      function (value) {
        if (!value) return false;
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed)) return false;

          return parsed.every(
            (item: unknown) =>
              typeof item === 'object' &&
              item !== null &&
              typeof (item as WordPairInput).id === 'number' &&
              typeof (item as WordPairInput).sourceWord === 'string' &&
              typeof (item as WordPairInput).targetWord === 'string'
          );
        } catch {
          return false;
        }
      }
    ),
});

const UploadForm: FC = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const handleValidate = async (values: { jsonInput: string }) => {
    try {
      await validationSchema.validate(values);
      setIsValidated(true);
      setValidationMessage('JSON is valid!');
    } catch (error) {
      setIsValidated(false);
      setValidationMessage(error instanceof Error ? error.message : 'Validation failed');
    }
  };

  const handleSave = (values: { jsonInput: string }) => {
    try {
      const parsed: WordPairInput[] = JSON.parse(values.jsonInput);
      console.log('Saving word pairs:', parsed);
      // TODO: Integrate with Zustand store to save the words
      setValidationMessage(`Successfully saved ${parsed.length} word pairs!`);
    } catch {
      setValidationMessage('Error saving data');
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom color="primary">
        Upload Word Pairs
      </Typography>

      <Formik
        initialValues={{ jsonInput: '' }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ values, errors, touched, isValid }) => (
          <Form>
            <Box sx={{ mb: 3 }}>
              <Field
                as={TextField}
                name="jsonInput"
                label="JSON Word Pairs"
                multiline
                rows={12}
                fullWidth
                variant="outlined"
                placeholder={`[
  {
    "id": 1,
    "sourceWord": "Hello",
    "targetWord": "Hola"
  },
  {
    "id": 2,
    "sourceWord": "Goodbye",
    "targetWord": "Adiós"
  }
]`}
                error={touched.jsonInput && !!errors.jsonInput}
                helperText={touched.jsonInput && errors.jsonInput}
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                  },
                }}
              />
            </Box>

            {validationMessage && (
              <Alert
                severity={isValidated ? 'success' : 'error'}
                sx={{ mb: 2 }}
                onClose={() => setValidationMessage(null)}
              >
                {validationMessage}
              </Alert>
            )}

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleValidate(values)}
                disabled={!values.jsonInput.trim()}
              >
                Validate
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSave(values)}
                disabled={!isValidated || !isValid}
              >
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default UploadForm;
