import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#219c3f',
    },
    secondary: {
      main: '#41b0a1',
    },
  },
})



createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
  </ThemeProvider>,
)
