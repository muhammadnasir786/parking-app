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
let style = {
    margin: 12
}
class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            loc: '',
            date: '',
            startingTime: '',
            endingTime: '',
            check: false
        }
    }
    render() {
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
                                        onChange={(e, date) => { this.setState({ date: date }) }} />
                                    <TimePicker
                                        hintText="Starting Time"
                                        onChange={(e, date) => { this.setState({ startingTime: date.toLocaleTimeString('en-US') }) }} />
                                    />
                                    <TimePicker
                                        onChange={(e, date) => { this.setState({ endingTime: date.toLocaleTimeString('en-US') }) }}
                                        hintText="Ending Time"
                                    />
                                    />
                                    <CardActions>
                                        <RaisedButton primary={true} label="cancel" />
                                        <RaisedButton secondary={true} label="Check"
                                        onClick={()=>{
                                            this.setState({ check : !this.state.check})
                                            
                                        }}
                                        /><br />
                                    </CardActions><br />
                                </Card>
                            </div>
                        </div> : null}


                    </div>
                    {this.state.check ? <div>
                        <hr />
                        <CardTitle style={{}} title={'Available Slots For Parking in Seleted Loaction'}
                            subtitle="Lets Reseved your space For Parking"
                        >
                        </CardTitle>
                        <hr />
                        <div>
                            <CardTitle title="Note : Just Click to Book a Specific Slot" />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                            <RaisedButton primary={true} label="Slots 2" style={style} />
                        </div>
                    </div> : null}
                </Card>
            </div>
        );
    }
}

export default DashBoard;