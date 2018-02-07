import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

//requiring all reducers
import AuthReducer from './reducers/authReducer';
import PAReducer from './reducers/PAReducer';

//requiring all epics
import AuthEpic from './epic/authEpic';
import PAEpic from "./epic/PAEpic";
//combine epic
const rootEpic = combineEpics(
    AuthEpic.createUser,
    AuthEpic.loginUser,
    PAEpic.getUsers,
    PAEpic.getFeedback,
    PAEpic.getBooking,
    PAEpic.addBooking,
    PAEpic.addFeedback,
    PAEpic.deleteBooking,
    PAEpic.updateBooking,
    PAEpic.replyFeedBack

);
//combine reducers
const rootReducer = combineReducers({
    AuthReducer , PAReducer
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store
export let store = createStoreWithMiddleware(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
});
