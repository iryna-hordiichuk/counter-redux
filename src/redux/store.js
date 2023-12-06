import { createStore, combineReducers } from 'redux';
import { accountReducer } from './account/accountReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  account: accountReducer,
});

// In a typical Redux setup, you might have multiple reducers,
// each responsible for handling a specific part of the application state.
// combineReducers receives 🌟the whole state object,
//* in this state object - each property becomes a "slice" ,
//* a reducer function becomes respective slice's value
// The combineReducers function is used to combine these individual reducers
// into a single reducer that can be passed to the Redux store.

const enhancer = devToolsEnhancer();
//this is to connect store with my app and also for middleware
// middleware - allows to add some other functions to a store (apart from reducers ?)
export const store = createStore(rootReducer, enhancer);
