import React from 'react'
import Root from './Router'
import { MuiThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import Footer from './components/footer'
import TestComp from './containers/test';

const theme = createMuiTheme({
  palette: {
    
    secondary: {
      
      main: '#D74800',
      // dark: will be calculated from palette.secondary.main,
     
    },
    // error: will use the default color
  },

});
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header position="fixed"/>
      <Root />
      <Footer />
      {/* <TestComp /> */}
    </MuiThemeProvider>
  ) 
}

export default withTheme()(App);
