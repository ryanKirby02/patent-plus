import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

import { formDataReducer, formStepTwoReducer } from './reducers/userDataReducer';

const reducer = combineReducers({
  formStepTwo: formStepTwoReducer,
  createrData: formDataReducer,
  form: formReducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
