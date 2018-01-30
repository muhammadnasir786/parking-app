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
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                            <TableRow key={''}>
                                <TableRowColumn>{'MUhammad Nasir'}</TableRowColumn>
                                <TableRowColumn><Avatar src={'https://lh3.googleusercontent.com/2AGxdME1c66HuKBnbBWLyJg-ZyCOX1KNasFnD38N185M246t3ILSNuzAO1KV69eYvwo'} /></TableRowColumn>
                                <TableRowColumn>{'2.20'}</TableRowColumn>
                                <TableRowColumn>{'2 : 20'}</TableRowColumn>
                                <TableRowColumn>{'Saddar Market'}</TableRowColumn>
                                <TableRowColumn><RaisedButton primary={true} label="Edit" /></TableRowColumn>
                                <TableRowColumn><RaisedButton secondary={true} label="Cancel" /></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        );
    }
}

export default ViewBookingList;