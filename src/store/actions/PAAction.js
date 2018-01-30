// bhai reducer k liye me wahein Object bana ta hon , ye Esay lagta he 

class PAAction {

    //--------- For Epics -------------
    static GET_USERS = 'GET_USERS';
    static GET_FEEDBACK = 'GET_FEEDBACK';
    static GET_BOOKING = 'GET_BOOKING';
    static ADD_BOOKING = 'ADD_BOOKING';
    static DELETE_BOOKING = 'DELETE_BOOKING';
    static UPDATE_BOOKING = 'UPDATE_BOOKING';

    // --------------For Reducer -----------

    static GET_USER_ADD = 'GET_FEEDBACK';
    static GET_BOOKING_ADD = 'GET_BOOKING_ADD';
    static GET_BOOKING_DELETE = 'GET_BOOKING_DELETE';
    static GET_BOOKING_UPDATE = 'GET_BOOKING_UPDATE';
    static GET_FEEDBACK_ADD = 'GET_FEEDBACK_ADD';


    // ---------------------For Epics---------

    static getUsers = (action$)=>{
        return action$.ofType(PAAction.GET_USERS)
            .switchMap(({ payload })=>{
                return new Observable((observer)=>{
                    ref.on('child_added',(s)=>{
                        observer.next({
                            type: PAAction.GET_USER_ADD,
                            payload : {
                                key : s.key,
                                val : s.val()
                            }
                        })
                    })
                })
            })
    }

}