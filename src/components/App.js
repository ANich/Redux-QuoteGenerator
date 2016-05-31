import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import QuoteContainer from '../containers/QuoteContainer'

const App = () => (
  <div>
    <MuiThemeProvider muiThemeProvider={getMuiTheme()}>
      <QuoteContainer />
    </MuiThemeProvider>
  </div>
)

export default App
