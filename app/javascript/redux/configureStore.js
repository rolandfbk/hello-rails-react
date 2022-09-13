import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greeting';

const rootReducer = combineReducers({
  greetingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;