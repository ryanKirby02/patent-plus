export const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FORM_STEP_ONE_SUBMIT':
            return { loading: true }
        case 'FORM_STEP_ONE_SUCCESS':
            return {loading: false, userData: action.payload}
        case 'FORM_STEP_ONE_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}