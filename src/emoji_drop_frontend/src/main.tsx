import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './App.tsx';
import './index.css';
import mainTheme from './themes/MainTheme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider theme={mainTheme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);
