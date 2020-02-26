import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


class AddItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.myTxtField = React.createRef();

        this.state = {
            fieldValue: ""
        }
    }

    keyPress(e) {
        this.setState({ fieldValue: e.target.value });
        if (e.keyCode === 13) {
            this.formSubmitted();
            e.target.value = "";
        }
    }

    formSubmitted() {
        if (this.state.fieldValue && this.state.fieldValue.trim().length > 0) {
            this.props.addTask(this.state.fieldValue);
        }
    }

    render() {
        return <Box style={{ display: 'flex'}}>
            <TextField ref={this.myTxtField} label="add nother task..." onKeyDown={this.keyPress.bind(this)} variant="outlined"/>
            <Button  color="secondary" onClick={this.formSubmitted.bind(this)}>Add</Button>
        </Box>
    }

}

export default AddItemForm;