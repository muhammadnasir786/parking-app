import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import BookingSlot from "../bookingSlot/bookingSlot";
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import { connect } from "react-redux";
import PAAction from "../../store/actions/PAAction";
import * as firebase from "firebase";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
let style = {
    margin: 12
}
class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            loc: '',
            date: '', // 1 to 31
            mounth: '',
            year: '',
            startingTime: '',
            endingTime: '',
            check: false,
            sloteNo: ''
        }
    }
    render() {
        // //   console.log(this.state.startingTime , this.state.oneBooking);
        // let st = 1 , et = 10 , gst = -2 , get = 2;
        // if(gst < st){
        //     get < st ? console.log('Booking') : null
        // }
        // if(gst > st && gst > et){
        //     get < et ? console.log('Booking') : null
        // }
        let flage = false;

        return (
            <div>
                <Card style={{ margin: '30px', padding: '5px' }}>
                    <CardTitle style={{}} title={'Available Locations For Parking in Karachi'}
                        subtitle="Booked Your Parking Space Saved Your Time Like A BOSS!"
                    >
                    </CardTitle>
                    <hr />
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '25%' }}>
                            <List>
                                <Subheader>Available Locations</Subheader>
                                <ListItem key={'uid'}
                                    primaryText={'Lucky One Mall'}
                                    onClick={() => { this.setState({ loc: 'luckyOneMall' }) }}
                                />
                            </List>
                        </div>
                        {this.state.loc ? <div style={{ width: '75%' }}>
                            <div>
                                <Card style={{ margin: '30px' }}>
                                    <CardTitle style={{}} title={'Book Your Parking'}
                                        subtitle="Booking Here ! !"
                                    >
                                    </CardTitle><hr />
                                    <DatePicker hintText="Select Date" mode="landscape"
                                        autoOk={this.state.autoOk}
                                        onChange={(e, date) => {
                                            console.log(date);
                                            this.setState({ date: date.getDate(), mounth: date.getMonth(), year: date.getFullYear(), startingTime: '', endingTime: '' });

                                        }} />
                                    <TimePicker
                                        hintText="Starting Time"
                                        value={new Date(this.state.startingTime)}
                                        onChange={(e, date) => {
                                            console.log(date);
                                            let datee = date;
                                            datee.setDate(this.state.date);
                                            datee.setMonth(this.state.mounth);
                                            datee.setFullYear(this.state.year)
                                            this.setState({ startingTime: datee.getTime() })
                                        }} />
                                    />
                                    <TimePicker
                                        defaultValue={{}}
                                        value={new Date(this.state.endingTime)}
                                        onChange={(e, date) => {
                                            console.log(date);
                                            let dateee = date;
                                            dateee.setDate(this.state.date);
                                            dateee.setMonth(this.state.mounth);
                                            dateee.setFullYear(this.state.year);
                                            this.setState({ endingTime: dateee.getTime() })
                                        }}
                                        hintText="Ending Time"
                                    />
                                    <SelectField
                                        floatingLabelText="Slote No : "
                                        value={this.state.sloteNo}
                                        onChange={(e, i, val) => { this.setState({ sloteNo: val }) }}
                                    >

                                        <MenuItem value={1} primaryText="1" />
                                    </SelectField>
                                    />
                                    <CardActions>
                                        <RaisedButton primary={true} label="cancel" />
                                        <RaisedButton secondary={true} label="Check"
                                            onClick={() => {
                                                console.log(this.state)
                                                // console.log(Object.keys(this.props.booking).length)
                                                if (this.props.booking !== undefined) {
                                                    if (Object.keys(this.props.booking).length !== 0) {
                                                        Object.keys(this.props.booking).map((val, key) => {
                                                            let oneBooking = this.props.booking[val];
                                                            console.log(oneBooking);
                                                            console.log(oneBooking.startingTime, oneBooking.endingTime);
                                                            console.log(this.state.startingTime, this.state.endingTime);
                                                            flage = true;
                                                            // console.log(new Date(oneBooking));
                                                            // console.log(this.state.startingTime.getTime(), this.state.endingTime.getTime());
                                                            // if (oneBooking.sloteNo === this.state.sloteNo) {
                                                            //     if (this.state.startingTime < oneBooking.startingTime) {
                                                            //         if (this.state.endingTime < oneBooking.startingTime) {
                                                            //             console.log('Do Booking');
                                                            //             flage = true;
                                                            //         }
                                                            //     }
                                                            //     if (this.state.startingTime > oneBooking.startingTime && this.state.startingTime > oneBooking.endingTime) {
                                                            //         // console.log('sdasd');
                                                            //         if (this.state.startingTime > oneBooking.endingTime && this.state.endingTime > oneBooking.endingTime) {
                                                            //             console.log('Do Booking')
                                                            //             flage = true;
                                                            //         }
                                                            //     }
                                                            // }
                                                            // }

                                                        })
                                                    } else {
                                                        flage = true
                                                    }
                                                }

                                                if (flage) {
                                                    console.log(flage);
                                                    // console.log(this.state);
                                                    let booking = {
                                                        uid: firebase.auth().currentUser.uid,
                                                        startingTime: this.state.startingTime,
                                                        endingTime: this.state.endingTime,
                                                        location: this.state.loc,
                                                        sloteNo: this.state.sloteNo
                                                    }
                                                    // console.log(booking);
                                                    this.props.addBooking(booking);
                                                }
                                                // console.log(flage);

                                                // this.setState({ check: !this.state.check })


                                            }}
                                        /><br />
                                    </CardActions><br />
                                </Card>
                            </div>
                        </div> : null}


                    </div>

                </Card>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        booking: state.PAReducer.booking
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addBooking: (data) => { dispatch(PAAction.addBooking(data)) }
    }
}

// export default DashBoard;
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)