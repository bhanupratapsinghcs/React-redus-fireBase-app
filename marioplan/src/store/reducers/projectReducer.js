const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
        { id: '4', title: 'egg hunt with bhanu', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Project Created ", action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log("project create err ", action.project)
            return state
        default:
            return state
    }
}
export default projectReducer