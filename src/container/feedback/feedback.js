import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';

class FeedBack extends Component {
    render() {
        return (
            <div>
                <Card style={{ margin: '50px' }}>
                    <CardTitle style={{}} title={'FeedBack List'}
                        subtitle="Check Your Feedback Here reply by Admin !">
                    </CardTitle><hr />
                    <Card style={{margin : 20}}>
                        <i><CardTitle style={{}} title={'"t is a long established fact that a reader will be distracted by the readable "'}
                            subtitle="This Reply By admin">
                        </CardTitle></i>
                    </Card>
                    <Card style={{margin : 20}}>
                        <i><CardTitle style={{}} title={'"t is a long established fact that a reader will be distracted by the readable "'}
                            subtitle="This Reply By admin">
                        </CardTitle></i>
                    </Card>
                    <Card style={{margin : 20}}>
                        <i><CardTitle style={{}} title={'"t is a long established fact that a reader will be distracted by the readable "'}
                            subtitle="This Reply By admin">
                        </CardTitle></i>
                    </Card>
                    <Card style={{margin : 20}}>
                        <i><CardTitle style={{}} title={'"t is a long established fact that a reader will be distracted by the readable "'}
                            subtitle="This Reply By admin">
                        </CardTitle></i>
                    </Card>

                </Card>
            </div>
        );
    }
}

export default FeedBack;