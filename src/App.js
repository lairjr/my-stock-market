import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShareList from './Share/List';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShareList />
      </Provider>
    );
  }
}

export default App;
