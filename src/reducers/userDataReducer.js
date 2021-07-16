export const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FORM_STEP_ONE_SUBMIT':
            return { loading: true }
        case 'FORM_STEP_ONE_SUCCESS':
            return {loading: false, stepOne: action.payload}
        case 'FORM_STEP_ONE_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const formStepTwoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FORM_STEP_TWO_SUBMIT':
            return {loading: true}
        case 'FORM_STEP_TWO_SUCCESS':
            return {loading: false, stepTwo: action.payload}
        case 'FORM_STEP_TWO_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const formStepThreeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FORM_STEP_THREE_SUBMIT':
            return {loading: true}
        case 'FORM_STEP_THREE_SUCCESS':
            return {loading: false, stepThree: action.payload}
        case 'FORM_STEP_THREE_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
export const formDataReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FORM_DATA_REVIEW_REQUEST':
            return {loading: true}
        case 'FORM_DATA_REVIEW_SUCCESS':
            return {loading: false, requestedData: action.payload}
        case 'FORM_DATA_REVIEW_FAIL':
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

