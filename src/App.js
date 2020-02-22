import React from 'react';
import TodoList from './item/TodoList';
import './App.css';
import AddItemForm from './form/AddItemForm'

function App() {
  return (
    <div className="App">
      <TodoList />
      <AddItemForm />            
    </div>
  );
}

export default App;
