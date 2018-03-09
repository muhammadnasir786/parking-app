// bhai reducer k liye me wahein Object bana ta hon , ye Esay lagta he 

class PAAction {

    //--------- For Epics -------------
    static GET_USERS = 'GET_USERS';
    static GET_FEEDBACK = 'GET_FEEDBACK';
    static GET_BOOKING = 'GET_BOOKING';
    static ADD_BOOKING = 'ADD_BOOKING';
    static ADD_FEEDBACK = 'ADD_FEEDBACK';
    static DELETE_BOOKING = 'DELETE_BOOKING';
    static UPDATE_BOOKING = 'UPDATE_BOOKING';
    static REPLY_FEEDBACK = 'REPLY_FEEDBACK';
    static UPDATE_PROFILE = 'UPDATE_PROFILE';
    // --------------For Reducer -----------
    
    static GET_USER_ADD = 'GET_FEEDBACK';
    static GET_BOOKING_ADD = 'GET_BOOKING_ADD';
    static GET_BOOKING_DELETE = 'GET_BOOKING_DELETE';
    static GET_BOOKING_UPDATE = 'GET_BOOKING_UPDATE';
    static GET_FEEDBACK_ADD = 'GET_FEEDBACK_ADD';
    static GET_FEEDBACK_UPDATE = 'GET_FEEDBACK_UPDATE'


    // ---------------------For Epics---------

    static getUsers = () => {
        return {
            type: PAAction.GET_USERS
        }
    }
    static getFeedback = () => {
        return {
            type: PAAction.GET_FEEDBACK
        }
    }
    static getBooking = () => {
        return {
            type: PAAction.GET_BOOKING
        }
    }
    static replyFeedBack = (data) => {
        return {
            type: PAAction.REPLY_FEEDBACK,
            payload: data
        }
    }
    static addBooking = (data) => {
        return {
            type: PAAction.ADD_BOOKING,
            payload: data
        }
    }
    static deleteBooking = (data) => {
        return {
            type: PAAction.DELETE_BOOKING,
            payload: data
        }
    }
    static updateBooking = (data) => {
        return {
            type: PAAction.UPDATE_BOOKING,
            payload: data
        }
    }
    static addFeedback = (data) => {
        return {
            type: PAAction.ADD_FEEDBACK,
            payload: data
        }
    }
    static updateProfile = (data)=>{
        return {
            type : PAAction.UPDATE_PROFILE,
            
        }
    }


}

export default PAAction;