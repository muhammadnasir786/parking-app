import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {CardHeader} from 'material-ui/Card';
import { connect } from 'react-redux'


 class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonClick={this.props.isLogin ?  this.handleToggle : ()=>{alert('Login First')}}
                    title="User Authentication Boiler Plate"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    // iconElementRight={<FlatButton label="Login" />}
                />
                <Drawer
                    docked={false}
                    width={260}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <CardHeader
                        title="Muhammad Nasir"
                        subtitle="MERN Stack Developer"
                        avatar="https://relayfm.s3.amazonaws.com/uploads/user/avatar/4/user_avatar_mykehurley_artwork.png"
                    />
                    <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

let mapStateToProps = (state)=>{
    return{
        isLogin : state.AuthReducer.isLogin
    }
}
export default connect(mapStateToProps)(Navbar)
