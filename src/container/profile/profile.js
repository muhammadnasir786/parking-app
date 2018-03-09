import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import * as firebase from "firebase";
import PAAction from "../../store/actions/PAAction";
class Profile extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: true,
            name: '',
            email: '',

        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.users[firebase.auth().currentUser.uid]);
        this.props.users[firebase.auth().currentUser.uid] !== undefined ?
        this.setState({
            name: nextProps.users[firebase.auth().currentUser.uid].name,
            email: nextProps.users[firebase.auth().currentUser.uid].email
        }) : null
    }
    render() {
        return (
            <div>
                <Card style={{ margin: '50px' }}>
                    <CardTitle style={{}} title={'Check Your Profile'}
                        subtitle="Edit OR Update Your Profile !"
                    >
                    </CardTitle><hr />
                    <TextField
                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                        disabled={this.state.isEdit}
                        floatingLabelText={'name'}
                        value={this.state.name}

                    /><br />
                    {/* {console.log(this.state.user.email)} */}
                    <TextField
                        disabled={true}
                        floatingLabelText={'Email'}
                        value={this.state.email}
                    /><br />
                    <RaisedButton primary={true} label="Cancel" style={{ margin: 12 }} />
                    <RaisedButton primary={true}
                        onClick={() => {
                            let user = {
                                key: firebase.auth().currentUser.uid,
                                role: 'user',
                                name: this.state.name
                            }
                            this.props.updateProfile(user)
                            this.setState({ isEdit: !this.state.isEdit })
                        }
                        }
                        label={this.state.isEdit ? 'Edit Profile' : 'Update Profile'}
                        style={{ margin: 12 }} />
                </Card>
            </div>
        );
    }
}

// export default Profile;
let mapStateToProps = (state) => {
    return {
        users: state.PAReducer.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (data) => { dispatch(PAAction.updateProfile(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)