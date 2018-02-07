
import PAAction from "../actions/PAAction";

let INITIAL_STATE = {
    users: {},
    feedBack: {},
    booking: {}
}
let PAReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAAction.GET_USER_ADD:
            // console.log(action.payload);
            let users = Object.assign({}, state.users);
            action.payload !== undefined ? users[action.payload.key] = action.payload.userData : null;
            return { ...state, users }
        case PAAction.GET_BOOKING_ADD:
            let booking = Object.assign({}, state.booking);
            booking[action.payload.key] = action.payload.bookingData;
            return { ...state, booking };
        case PAAction.GET_FEEDBACK_ADD:
            let feedBack = Object.assign({}, state.feedBack);
            feedBack[action.payload.key] = action.payload.feedbackData;
            return { ...state, feedBack };
        case PAAction.GET_FEEDBACK_UPDATE:
            let feedBackk = Object.assign({}, state.feedBack);
            feedBackk[action.payload.key] = action.payload.feedbackData;
            return { ...state, feedBack : feedBackk };
        case PAAction.GET_BOOKING_DELETE:
            let bookingg = Object.assign({}, state.booking);
            delete bookingg[action.payload];
            return { ...state, booking: bookingg };

        case PAAction.GET_BOOKING_UPDATE:
            let bookinggg = Object.assign({}, state.booking);
            bookinggg[action.payload.key] = action.payload.bookingData;
            return { ...state, booking: bookinggg };
        default:
            return state;
    }
}
export default PAReducer;