import { createStore, applyMiddleware } from 'redux';//compose
import { composeWithDevTools } from 'redux-devtools-extension';
// import { composeWithDevTools } from 'remote-redux-devtools';

import thunk from 'redux-thunk'
import rootReducers from '../reducers'

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
