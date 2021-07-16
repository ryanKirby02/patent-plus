import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

import { formDataReducer, formStepThreeReducer, formStepTwoReducer, formDataReviewReducer } from './reducers/userDataReducer';

const reducer = combineReducers({
  formDataReview: formDataReviewReducer,
  formStepThree: formStepThreeReducer,
  formStepTwo: formStepTwoReducer,
  createrData: formDataReducer,
  form: formReducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
