import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
// import { connect } from 'react-redux'

class BookingSlot extends Component {
    render() {
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={'Book Your Parking'}
                        subtitle="Booking Here ! !"
                    >
                    </CardTitle><hr />
                    <DatePicker hintText="Select Date" mode="landscape" />
                    <TimePicker
                        hintText="Starting Time"
                    />
                    <TimePicker
                        hintText="Ending Time"
                    />
                    <CardActions>
                        <RaisedButton primary={true} label="cancel" />
                        <RaisedButton secondary={true} label="Check" /><br />
                    </CardActions><br/>
                </Card>
            </div>
        );
    }
}
 
export default BookingSlot;
// export default connect(mapStateToProps, mapDispatchToProps)(BookingSlot)