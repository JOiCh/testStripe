import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import theme from './src/theme/theme'
const React = require('react')
export const wrapRootElement = ({ element }) => {
  //function 寫法注意
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}
