import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import ShareList from './Share/List';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <ShareList />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
