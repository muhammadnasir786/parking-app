import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as firebase from "firebase";
import PAAction from "../../store/actions/PAAction";

class ViewBookingList extends Component {
    render() {
        return (
            <div>

                <Card style={{ margin: '50px' }}>
                    <CardTitle style={{}} title={'View Booking List'}
                        subtitle="Check Your Booking Here ! !"
                    >
                    </CardTitle><hr />
                    <Table adjustForCheckbox={false}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Image</TableHeaderColumn>
                                <TableHeaderColumn>Starting Time</TableHeaderColumn>
                                <TableHeaderColumn>Ending Time</TableHeaderColumn>
                                <TableHeaderColumn>Location</TableHeaderColumn>
                                <TableHeaderColumn>Edit</TableHeaderColumn>
                                <TableHeaderColumn>Remove</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.props.booking !== undefined ? Object.keys(this.props.booking).map((val, i) => {
                                let oneBooking = this.props.booking[val];
                                console.log(oneBooking);
                                // let stHour = oneBooking.startingTime;
                                // console.log(stHour);
                                let stHour = ((new Date(Date(oneBooking.startingTime)).getHours()))
                                let stMin = ((new Date(Date(oneBooking.startingTime)).getMinutes()))
                                let etHour = ((new Date(Date(oneBooking.startingTime)).getHours()))
                                let etMin = ((new Date(Date(oneBooking.startingTime)).getMinutes()));
                                let user;
                                this.props.users !== undefined ? user = (this.props.users[firebase.auth().currentUser.uid]) : null
                                // console.log(this.props.users);
                                // console.log(user);

                                // let st = `${ Date(oneBooking.startingTime).getHours()} : ${ Date(oneBooking.endingTime).getMinutes()}`;
                                // let et = `${ Date(oneBooking.startingTime).getHours()} : ${ Date(oneBooking.endingTime).getMinutes()}`;
                                // console.log(st,et);
                                return <TableRow key={val}>
                                    <TableRowColumn>{user !== undefined ? user.name : null}</TableRowColumn>
                                    <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                    <TableRowColumn>{`${stHour} : ${stMin}`}</TableRowColumn>
                                    <TableRowColumn>{`${etHour} : ${etMin}`}</TableRowColumn>
                                    <TableRowColumn>{`${oneBooking.location}`}</TableRowColumn>
                                    <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                    <TableRowColumn><RaisedButton secondary={true} label="Cancel" onClick={() => {
                                        this.props.deleteBooking(val)
                                    }} /></TableRowColumn>
                                </TableRow>
                            }) : null}

                        </TableBody>
                    </Table>
                </Card>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        booking: state.PAReducer.booking,
        users: state.PAReducer.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deleteBooking: (data) => { dispatch(PAAction.deleteBooking(data)) }
    }
}
// export default ViewBookingList;
export default connect(mapStateToProps, mapDispatchToProps)(ViewBookingList)
