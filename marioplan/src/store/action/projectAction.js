export const createproject = (project) => {
    return (dispatch, getState, { getfirebase, getfirestore }) => {
        // for async call too database
        dispatch({ type: 'CREATE_PROJECT', project })
    }
}