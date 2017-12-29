

import AuthAction from "../actions/authAction";

let AuthState = {
    loginShow : true,
    registerShow : false,
    isLogin: false,
    user: {}
}

let AuthReducer = (state = AuthState, action) => {
    switch (action.type) {
        case AuthAction.CREATE_USER_SUCCESSFULLY:
            return { ...state , loginShow : true , registerShow :false};
            break;
        case AuthAction.LOGIN_USER_SUCCESSFULLY:
            return (Object.assign({}, { isLogin: true, user: action.payload }))
            break;
        case 'REGISTER_SHOW':
            return { ...state , registerShow : true , loginShow : false}
        default:
           return  state
    }
}
export default AuthReducer;