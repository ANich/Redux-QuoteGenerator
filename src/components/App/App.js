import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { QuoteContainer} from '../../containers'

const App = () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <QuoteContainer />
    </MuiThemeProvider>
  </div>
)

export default App
