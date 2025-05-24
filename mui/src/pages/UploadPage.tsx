import { FC } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const demoMarkdown = `
# Upload Page Demo

Welcome to the **Upload Page**! This page demonstrates markdown rendering capabilities.

## Features

### Text Formatting
- **Bold text** and *italic text*
- ~~Strikethrough text~~
- \`Inline code\`

### Lists
1. First ordered item
2. Second ordered item
3. Third ordered item

#### Unordered List:
- Bullet point one
- Bullet point two
  - Nested bullet
  - Another nested bullet

### Code Block
\`\`\`typescript
interface WordPair {
  id: string;
  sourceWord: string;
  targetWord: string;
}

const example: WordPair = {
  id: '1',
  sourceWord: 'Hello',
  targetWord: 'Hola'
};

// Function to create a new word pair
function createWordPair(source: string, target: string): WordPair {
  return {
    id: Math.random().toString(36).substr(2, 9),
    sourceWord: source,
    targetWord: target
  };
}
\`\`\`

### JavaScript Example
\`\`\`javascript
const words = [
  { id: '1', sourceWord: 'Hello', targetWord: 'Hola' },
  { id: '2', sourceWord: 'Goodbye', targetWord: 'Adiós' }
];

const filteredWords = words.filter(word => 
  word.sourceWord.toLowerCase().includes('hello')
);

console.log(filteredWords);
\`\`\`

### JSON Example
\`\`\`json
{
  "words": [
    {
      "id": "1",
      "sourceWord": "Good morning",
      "targetWord": "Buenos días"
    },
    {
      "id": "2", 
      "sourceWord": "Thank you",
      "targetWord": "Gracias"
    }
  ],
  "metadata": {
    "language": "es",
    "count": 2
  }
}
\`\`\`

### Links and Images
- [React Documentation](https://reactjs.org/)
- [Material-UI](https://mui.com/)

### Blockquote
> This is a blockquote example.
> It can span multiple lines.

---

## Upload Functionality
*Coming soon!* This page will allow users to:
- Upload word pairs
- Import CSV files
- Manage vocabulary lists

### Tables
| Source Language | Target Language | Status |
|-----------------|-----------------|--------|
| English         | Spanish         | ✅     |
| Polish          | English         | ✅     |
| French          | English         | 🚧     |
`;

export const UploadPage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 800,
            bgcolor: 'background.paper',
            color: 'text.primary',
          }}
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <Typography variant="h3" component="h1" gutterBottom color="primary">
                  {children}
                </Typography>
              ),
              h2: ({ children }) => (
                <Typography variant="h4" component="h2" gutterBottom color="secondary">
                  {children}
                </Typography>
              ),
              h3: ({ children }) => (
                <Typography variant="h5" component="h3" gutterBottom>
                  {children}
                </Typography>
              ),
              p: ({ children }) => (
                <Typography variant="body1" paragraph>
                  {children}
                </Typography>
              ),
              a: ({ children, href, ...props }) => (
                <Box
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#4FC3F7', // Light blue for better readability
                    textDecoration: 'underline',
                    '&:hover': {
                      color: '#81D4FA', // Even lighter blue on hover
                    },
                  }}
                  {...props}
                >
                  {children}
                </Box>
              ),
              code: ({ children, className, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                const isInline = !match;

                if (isInline) {
                  return (
                    <Box
                      component="code"
                      sx={{
                        bgcolor: '#1e1e1e',
                        color: '#d4d4d4',
                        px: 0.5,
                        py: 0.25,
                        borderRadius: 0.5,
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                      }}
                    >
                      {children}
                    </Box>
                  );
                }

                return (
                  <Box
                    sx={{
                      my: 2,
                      '& pre': {
                        margin: '0 !important',
                        borderRadius: '8px !important',
                        fontSize: '0.875rem !important',
                      },
                    }}
                  >
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={language}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </Box>
                );
              },
            }}
          >
            {demoMarkdown}
          </ReactMarkdown>
        </Paper>
      </Box>
    </Container>
  );
};

export default UploadPage;
