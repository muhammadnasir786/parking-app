


class AuthAction {
    //------- For Epics ------

    static CREATE_USER = 'CREATE_USER';
    static LOGIN_USER = 'LOGIN_USER';

    //------- For Reducer ------
    static CREATE_USER_SUCCESSFULLY = 'CREATE_USER_SUCCESSFULLY'
    static LOGIN_USER_SUCCESSFULLY = 'LOGIN_USER_SUCCESSFULLY'


    //------- For Epics ------

    static createUser = (data) => {
        return {
            type: AuthAction.CREATE_USER,
            payload: data
        }
    }

    static loginUser = (data) => {
        return {
            type: AuthAction.LOGIN_USER,
            payload: data
        }
    }

    //------- For Reducer ------
    static createUserSuccessfully = ()=>{
        return {
            type : AuthAction.CREATE_USER_SUCCESSFULLY,
        }
    }
    static loginUserSuccessfully = (data)=>{
        return {
            type : AuthAction.LOGIN_USER_SUCCESSFULLY,
            payload : data
        }
    }

}

export default AuthAction;