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
            user: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.users);
        this.setState({ user: nextProps.users[firebase.auth().currentUser.uid] })

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
                        floatingLabelText={this.state.user.name}

                    /><br />
                    <TextField
                        disabled={true}
                        floatingLabelText={this.state.users.emal}
                    /><br />
                    <RaisedButton primary={true} label="Cancel" style={{ margin: 12 }} />
                    <RaisedButton primary={true}
                        onClick={() => {
                            this.props.updateProfile(this.state.name)
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
        updateProfile : (data)=>{ dispatch(PAAction.updateProfile(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)