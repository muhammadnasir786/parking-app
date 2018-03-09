
import * as firebase from "firebase";

import PAAction from "../actions/PAAction";
import { Observable } from 'rxjs';
let ref = firebase.database().ref('/');
export default class PAEpic {

    static getUsers = (action$) => {
        return action$.ofType(PAAction.GET_USERS)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    ref.child('users/').on('child_added', (s) => {
                        observer.next({
                            type: PAAction.GET_USER_ADD,
                            payload: {
                                key: s.key,
                                userData: s.val()
                            }
                        })
                    })
                })
            })
    }
    static getFeedback = (action$) => {
        return action$.ofType(PAAction.GET_FEEDBACK)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    ref.child('feedback/').on('child_added', (s) => {
                        observer.next({
                            type: PAAction.GET_FEEDBACK_ADD,
                            payload: {
                                key: s.key,
                                feedbackData: s.val()
                            }
                        })
                    })
                    ref.child('feedback/').on('child_changed', (s) => {
                        console.log(s.val(), s.key)
                        observer.next({
                            type: PAAction.GET_FEEDBACK_UPDATE,
                            payload: {
                                key: s.key,
                                feedbackData: s.val()
                            }
                        })
                    })
                })
            })
    }
    static getBooking = (action$) => {
        return action$.ofType(PAAction.GET_BOOKING)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    ref.child('booking/').on('child_added', (s) => {
                        observer.next({
                            type: PAAction.GET_BOOKING_ADD,
                            payload: {
                                key: s.key,
                                bookingData: s.val()
                            }
                        })
                    })
                    ref.child('booking/').on('child_removed', (s) => {
                        observer.next({
                            type: PAAction.GET_BOOKING_DELETE,
                            payload: s.key
                        })
                    })
                    ref.child('booking/').on('child_changed', (s) => {
                        observer.next({
                            type: PAAction.GET_BOOKING_ADD,
                            payload: {
                                key: s.key,
                                bookingData: s.val()
                            }
                        })
                    })
                })
            })
    }

    static addFeedback = (action$) => {
        return action$.ofType(PAAction.ADD_FEEDBACK)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    ref.child(`feedback/`).push(payload).then(() => {
                        console.log('FeedBack Add');
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })
    }
    static addBooking = (action$) => {
        return action$.ofType(PAAction.ADD_BOOKING)
            .switchMap(({ payload }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    ref.child(`booking/`).push(payload).then(() => {
                        // console.log('Booking Add');
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })
    }
    static deleteBooking = (action$) => {
        return action$.ofType(PAAction.DELETE_BOOKING)
            .switchMap(({ payload }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    ref.child(`booking/${payload}`).set(null).then(() => {
                        console.log('Booking Delete');
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })
    }
    static updateBooking = (action$) => {
        return action$.ofType(PAAction.UPDATE_BOOKING)
            .switchMap(({ payload }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    ref.child(`booking/${payload.key}/`).set(payload.bookingData).then(() => {
                        console.log('Booking Delete');
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })
    }
    static replyFeedBack = (action$) => {
        return action$.ofType(PAAction.REPLY_FEEDBACK)
            .switchMap(({ payload }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    ref.child(`feedback/${payload.key}/reply`).set(payload.reply).then(() => {
                        console.log('FeedBack ');
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })
    }
    static updateProfile = (action$) => {
        return action$.ofType(PAAction.UPDATE_PROFILE)
            .switchMap(({ payload }) => {
                // console.log(payload)
                return Observable.fromPromise(
                    ref.child(`users/${payload.key}/`).set(payload.userData).then(() => {
                        console.log('Booking Delete');
                    })
                )
                    .map((x) => {
                        return { type: null }
                    })
            })
    }






}