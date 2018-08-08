// @flow

import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from '../reducer';

// setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// setup store with thunk middleware
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
