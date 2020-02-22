import React from 'react';

class Item extends React.Component {

    constructor(props){
        super(props);

        this.state = {done: false};
    }

    handleChange(event) {
        this.setState({done: event.target.checked});
        this.props.taskChanged(event.target.checked);
    }
    
    render() {
        return (
          <div className="item">
            <input type="checkbox" id={this.props.number} checked={this.state.done} onChange={(e) => this.handleChange(e)}/>
            <label htmlFor={this.props.number}>
                {this.props.name}
            </label>
          </div>
        );
      }

}

export default Item;