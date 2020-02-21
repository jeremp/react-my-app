import React from 'react';
import Item from './Item'

class TodoList extends React.Component {

    constructor(props){
        super(props);

        let todos = [
            {number:0, name:"some stuff", done:true},
            {number:1, name:"other stuff", done:false},
            {number:2, name:"another stuff", done:false}            
        ];

        this.state = {
            todoData: todos
        }; 
    }

    render() { 

        const listItems = this.state.todoData.map((d) =>
        <div key={d.number.toString()}>
            <Item number={d.number} name={d.name} done={d.done}/>
        </div>
        );

        return (
          <div className="todo">
              {listItems}
          </div>
        );
      }

}

export default TodoList;