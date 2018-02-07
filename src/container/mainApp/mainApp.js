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
import { connect } from "react-redux";
import PAAction from "../../store/actions/PAAction";

const style = {
    margin: 12,
}
class MainApplication extends Component {
    constructor(props) {
        super(props);
        
    }
   componentDidMount(){
    this.props.getBooking();
    this.props.getUsers();
    this.props.getFeedback();
   } 
    
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
let mapStateToProps = (state)=>{
    return {
        
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        getUsers : ()=>{ dispatch(PAAction.getUsers())},
        getFeedback : ()=>{ dispatch(PAAction.getFeedback())},
        getBooking : ()=>{ dispatch(PAAction.getBooking())}
    }
}

// export default MainApplication;
export default connect(mapStateToProps, mapDispatchToProps)(MainApplication)