import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'globalStyles'
import Gallery from 'components/Gallery'
import { lightTheme } from 'theme'

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Gallery />
  </ThemeProvider>
)

export default App
