import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import ShareList from './Share/List';

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <ShareList />
    </Provider>
  </MuiThemeProvider>
);

export default App;
