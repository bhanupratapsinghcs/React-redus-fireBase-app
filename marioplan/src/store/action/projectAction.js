export const createproject = (project) => {
    return (dispatch, getState) => {
        // for async call too database
        dispatch({ type: 'CREATE_PROJECT', project })
    }
}