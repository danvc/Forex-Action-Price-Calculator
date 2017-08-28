import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class InputFields extends Component {
    render() {
        console.log(this.props);
        return (
            <Form widths='equal'>
                <Form.Group>
                    <Form.Field width='4'>
                        <label>Close (Daily)</label>
                        <Input placeholder='Price' name='close' onChange={this.props.onChange} value={this.props.close}/>
                    </Form.Field>
                    <Form.Field width='4'>
                        <label>High (Daily)</label>
                        <Input placeholder='Price' name='high' onChange={this.props.onChange} value={this.props.high}/>
                    </Form.Field>
                    <Form.Field width='4'>
                        <label>Low (Daily)</label>
                        <Input placeholder='Price' name='low' onChange={this.props.onChange} value={this.props.low}/>
                    </Form.Field>
                </Form.Group>
            </Form>
        );
    }
}

export default InputFields;