import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';

class AddItemForm extends React.Component {

    constructor(props) {
        super(props)
    }

    keyPress(e) {
        if(e.keyCode === 13){
            this.props.addTask(e.target.value);
            e.target.value = "";
         }
    }

    render() {
        return <div>
            <TextField label="add nother task..." onKeyDown={this.keyPress.bind(this)}/>
            <IconButton color="secondary" aria-label="add an alarm">
                <AddCircle />
            </IconButton>
        </div>
    }

}

export default AddItemForm;