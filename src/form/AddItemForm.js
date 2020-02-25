import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';

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
        return <div>
            <TextField ref={this.myTxtField} label="add nother task..." onKeyDown={this.keyPress.bind(this)} />
            <IconButton color="secondary" aria-label="add an alarm" onClick={this.formSubmitted.bind(this)}>
                <AddCircle />
            </IconButton>
        </div>
    }

}

export default AddItemForm;