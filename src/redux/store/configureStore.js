import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

export default configureStore;
