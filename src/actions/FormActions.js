import axios from 'axios';

export const formStepOne = (firstName, middleName, lastName, title) => async (dispatch) => {
  try {
    dispatch({
      type: 'FORM_STEP_ONE_SUBMIT',
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/form/user-data', { firstName, middleName, lastName, title }, config);
    dispatch({
      type: 'FORM_STEP_ONE_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'FORM_STEP_ONE_FAIL',
      payload: error,
    });
  }
};

export const submitStep2 = (invenName, category) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'FORM_STEP_TWO_SUBMIT',
    });
    const {
      createrData: { stepOne },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.put('/api/form/user-data', { stepOne, invenName, category }, config);
    dispatch({
      type: 'FORM_STEP_TWO_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'FORM_STEP_TWO_FAIL',
      payload: error,
    });
  }
};

export const submitStepThree = (productType) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'FORM_STEP_THREE_SUBMIT',
    });
    const {
      formStepTwo: { stepTwo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.put('/api/form/user-data/final', { stepTwo, productType }, config);
    dispatch({
      type: 'FORM_STEP_THREE_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'FORM_STEP_THREE_FAIL',
      payload: error,
    });
  }
};

export const getFormData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'FORM_DATA_REVIEW_REQUEST',
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(`/api/form/user-data/${id}`, config);
    dispatch({
      type: 'FORM_DATA_REVIEW_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'FORM_DATA_REVIEW_FAIL',
      payload: error,
    });
  }
};
