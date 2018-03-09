import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from "firebase";
import { connect } from "react-redux";
import PAAction from "../../store/actions/PAAction";
class FeedBack extends Component {
    constructor() {
        super();
        this.state = {
            feedBack: ''
        }
    }
    render() {
        return (
            <div>
                <Card style={{ margin: '50px' }}>
                    <CardTitle style={{}} title={'FeedBack List'}
                        subtitle="Check Your Feedback Here reply by Admin !">
                    </CardTitle><hr />
                    {this.props.users[firebase.auth().currentUser.uid] !== undefined ? this.props.users[firebase.auth().currentUser.uid].role === 'user' ?
                     <div>
                        <TextField
                            floatingLabelText="Write Your FeedBack Here !"
                            onChange={(e) => { this.setState({ feedBack: e.target.value }) }}
                        />
                        <RaisedButton primary={true} label="Submit" style={{ margin: 12 }}
                            onClick={() => {
                                let feedBack = {
                                    feedBack: this.state.feedBack,
                                    uid: firebase.auth().currentUser.uid,
                                    reply: 'Waiting For Reply by Admin'
                                }
                                this.props.addFeedback(feedBack);
                            }}
                        />
                    </div> : null : null}
                    {this.props.feedBack !== undefined ?
                        Object.keys(this.props.feedBack).map((val, key) => {
                            let oneFeedback = this.props.feedBack[val];
                            // this.props.users[firebase.auth().currentUser.uid] !== undefined ? this.props.users[firebase.auth().currentUser.uid].role :null
                           
                            if (oneFeedback.uid === firebase.auth().currentUser.uid && this.props.users[firebase.auth().currentUser.uid].role === '') {
                                return (
                                    <OneFeedback
                                        key={val}
                                        feedBackKey={val}
                                        replyFeedBack={this.props.replyFeedBack}
                                        oneFeedback={oneFeedback}
                                        role={this.props.users[firebase.auth().currentUser.uid] !== undefined ? this.props.users[firebase.auth().currentUser.uid].role :null} />
                                )
                            }
                        }) : null}
                </Card>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        feedBack: state.PAReducer.feedBack,
        // role: state.PAReducer.role,
        users: state.PAReducer.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFeedback: (data) => { dispatch(PAAction.addFeedback(data)) },
        replyFeedBack: (data) => { dispatch(PAAction.replyFeedBack(data)) }
    }
}

// export default FeedBack;
export default connect(mapStateToProps, mapDispatchToProps)(FeedBack)



class OneFeedback extends Component {
    constructor() {
        super();
        this.state = {
            reply: ''
        }

    }
    render() {
        // this.props.oneFeedback !== undefined ? console.log(this.props.oneFeedback.feedBack) : null
        // console.log(this.props.oneFeedback.replyFeedBack)
        return (
            <Card style={{ margin: 20 }}>
                <i><CardTitle style={{}}
                    title={`" ${this.props.oneFeedback.feedBack}"`}
                    subtitle={this.props.oneFeedback.reply}>
                </CardTitle></i>
                {this.props.role === 'admin' ? <span>
                    <TextField
                        floatingLabelText="Write Your FeedBack Reply Here !"
                        value={this.state.reply}
                        onChange={(e) => { this.setState({ reply: e.target.value }) }}
                    />
                    <RaisedButton primary={true} label="Submit" style={{ margin: 12 }}
                        onClick={() => {
                            let replyFeedBack = {
                                key: this.props.feedBackKey,
                                reply: this.state.reply
                            }
                            this.props.replyFeedBack(replyFeedBack);
                        }}
                    />
                </span> : null}
            </Card>
        );
    }
}

// export default OneFeedback;