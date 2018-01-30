import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            isEdit : true,
            name : ''
        }
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
                        onChange={(e)=>{ this.setState({ name : e.target.value })}}
                        disabled={this.state.isEdit}
                        floatingLabelText="Name"
                        /><br />
                    <TextField
                        disabled={true}
                        floatingLabelText="Email"
                        /><br />
                        <RaisedButton primary={true} label="Cancel" style={{margin : 12}} />
                        <RaisedButton primary={true}
                        onClick={()=>{this.setState({ isEdit : !this.state.isEdit})}}
                        label={this.state.isEdit ? 'Edit Profile' : 'Update Profile'} style={{margin : 12}} />
                </Card>
            </div>
        );
    }
}

export default Profile;