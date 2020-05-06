import React from 'react';
import SwitchNavigator from './navigation/SwitchNavigator'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
}

export default App;