import axios from 'axios'

export const formStepOne = (data) => async (dispatch) => {
    try {
        dispatch({
            type: 'FORM_STEP_ONE_SUBMIT'
        })
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const {data} = await axios.post('/api/form/data')
    } catch (error) {
        
    }
}