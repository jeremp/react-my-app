import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';

class AddItemForm extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return <div>
            
            <TextField />
            <IconButton color="secondary" aria-label="add an alarm">
  <AddCircle />
</IconButton>
            </div>
    }

}

export default AddItemForm;