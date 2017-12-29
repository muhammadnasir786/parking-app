

import { Observable } from 'rxjs'
import  AuthAction from "../actions/authAction";

import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDqPpxlIGjEikoqzvZqB7_-10158KdfxOs",
    authDomain: "reactreduxtodoappfirebase.firebaseapp.com",
    databaseURL: "https://reactreduxtodoappfirebase.firebaseio.com",
    projectId: "reactreduxtodoappfirebase",
    storageBucket: "",
    messagingSenderId: "866095779438"
  };
firebase.initializeApp(config);

const ref = firebase.database().ref('/');
const auth = firebase.auth();

class AuthEpic {

        static createUser = (action$)=>{
            let userCreated = false;
            return action$.ofType(AuthAction.CREATE_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.createUserWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        ref.child(`users/${res.uid}/`).set(payload);
                        userCreated = true;
                        // Action Dispatch for reducer to state change , and component render for 
                        // login OK use flages and dispatch at the bottom .map((x)=>{})
                        alert('User Successfully Created')
                    }).catch((err)=>{
                        console.log(err)
                        alert(err.message)
                        
                    })
                )
                .map((x)=>{
                    return userCreated ? AuthAction.createUserSuccessfully() : { type : null}
                })
            })
        }

        static loginUser = (action$)=>{
            let authenticate = false;
            let userData ;
            return action$.ofType(AuthAction.LOGIN_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.signInWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        authenticate = true;
                        localStorage.setItem('uid',res.uid)
                        console.log(res)
                        // send  userdata at the end for reducer

                    }).catch((err)=>{
                        console.log(err)
                    })
                )
                .map((x)=>{
                    return   authenticate ? AuthAction.loginUserSuccessfully() : {type : null}
                })
            })
        }
}

export default AuthEpic;