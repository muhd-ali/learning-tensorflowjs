import React from 'react';
import 'App.css';
import MyAppBar from 'components/Navigation/MyAppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'components/Routes/routes';
import { MuiThemeProvider, createMuiTheme, colors } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
  palette: createPalette({
    primary: colors.deepOrange,
    secondary: colors.grey,
  }),
  typography: {
    useNextVariants: true,
  },
})

const App: React.FC = (props) => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <MyAppBar>
          <div style={{ 'paddingTop': '24px' }}>
            <Routes />
          </div>
        </MyAppBar>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
