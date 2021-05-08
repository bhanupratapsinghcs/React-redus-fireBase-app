export const createproject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // for async call too database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "bhanu",
            authorLastName: "singh",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    }
}