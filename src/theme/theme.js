import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      light: '#68c6c8',
      main: '#28aeb1',
    },
    secondary: {
      light: '#fdea8e',
      main: '#FDEA8E',
      other: '#cccccc',
    },
    sucess: {
      main: '#68C6C8',
    },
    info: {
      light: '#cccccc',
      main: '#666666',
    },
    error: {
      light: '#db807c',
      main: '#CC4A44',
    },
  },
  typography: {
    h2: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#28aeb1',
    },
    h3: {
      fontSize: '18px',
    },
    h4: {
      fontSize: '16px',
    },
    h5: {
      fontSize: '14px',
    },
    h6: {
      fontSize: '12px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        elevation: 0,
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
})

export default theme
