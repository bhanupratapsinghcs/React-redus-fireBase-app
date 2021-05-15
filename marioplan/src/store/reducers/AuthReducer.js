const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("error login")
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log("SIGNUP SUCCESS")
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log("SIGNUP Error")
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNOUT_SUCCESS':
            console.log("signOut")
            return state
        default:
            return state
    }
}
export default authReducer