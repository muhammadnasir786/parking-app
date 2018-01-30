import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import BookingSlot from "../bookingSlot/bookingSlot";
import ViewBookingList from "../viewBooking/viewBookingList";
import { Card, CardTitle } from 'material-ui/Card';
// import BrowserHistory from "react-router";
// import History from '../history'
import history from '../history';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import FeedBack from "../feedback/feedback";
import Profile from "../profile/profile";
import DashBoard from "../dashboard/dashboard";
// history.push('/chat');



const style = {
    margin: 12,
}
class MainApplication extends Component {
    render() {
        return (<div>
            <Router>
                <div>
                    {/* <RaisedButton><Link to='/'>DashBoard</Link></RaisedButton>
                   <RaisedButton><Link to='/profile'>Profile</Link></RaisedButton>
                   <RaisedButton><Link to='/booking'>View Booking</Link></RaisedButton>
                   <RaisedButton><Link to='/'></Link></RaisedButton> */}

                    <Link to='/'><RaisedButton primary={true} label="DashBoard" style={style} /></Link>
                    <Link to='/profile'><RaisedButton primary={true} label="Profile" style={style} /></Link>
                    <Link to='/booking'><RaisedButton primary={true} label="View Booking" style={style} /></Link>
                    <Link to='/feedback'><RaisedButton primary={true} label="FeedBack" style={style} /></Link>
                    <Route exact path='/' component={DashBoard} />
                    <Route exact path='/booking' component={ViewBookingList} />
                    <Route exact path='/bookingslot' component={BookingSlot} />
                    <Route exact path='/feedback' component={FeedBack} />
                    <Route exact path='/profile' component={Profile} />
                </div>
            </Router>
        </div>
        );
    }
}

export default MainApplication;