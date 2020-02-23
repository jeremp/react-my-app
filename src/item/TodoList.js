import React from 'react';
import Item from './Item'
import Banner from '../banner/Banner';
import AddItemForm from '../form/AddItemForm'

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        let todos = [
            { number: "1", name: "some stuff", done: true },
            { number: "2", name: "other stuff", done: false },
            { number: "3", name: "another stuff", done: false }
        ];

        this.state = {
            todoData: todos,
            tasksDone: 0
        };

        this.mybanner = React.createRef();
    }

    getTimeStamp() {
        return new Date().getTime();
    }

    addTask(text) {
        var array = this.state.todoData ;
        array.push({ number: this.getTimeStamp()+"", name: text, done: false });
        this.setState({
            todoData: array
        });
    }

    render() {

        const listItems = this.state.todoData.map((d) =>
            <div key={d.number.toString()}>
                <Item number={d.number} name={d.name} done={d.done} taskChanged={this.taskChanged.bind(this)} />
            </div>
        );

        return (
            <div className="todo">
                <Banner ref={this.mybanner} />
                {listItems}
                <AddItemForm addTask={this.addTask.bind(this)}/>
            </div>
        );
    }

    taskChanged(ticked) {
        let doneCount = this.state.tasksDone;
        if (ticked === true) {
            doneCount++;
        } else {
            doneCount--;
        }
        this.setState({
            tasksDone: doneCount
        });

        if (doneCount >= this.state.todoData.length) {
            this.mybanner.current.allWorkCompleted();
        } else {
            this.mybanner.current.notCompleted();
        }

    }


}

export default TodoList;