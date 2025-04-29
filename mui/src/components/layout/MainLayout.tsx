import { ReactNode } from "react";
import {Box, boxClasses, Container, Typography, useTheme} from "@mui/material";

export const MainLayout = ({ children }: { children?: ReactNode }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Box
                component="header"
                sx={{
                    width: '100%',
                    py: 1.5,
                    px: 3,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    boxShadow: 1,
                    zIndex: 10,
                }}
            >
                <Typography variant="h6" component="div">
                    Word Slider
                </Typography>
            </Box>
            <Box  component="main"
                  sx={{
                    flex: 1,
                    display: 'flex',
                  }}>
                {children}
            </Box>
        </Box>
    );
};