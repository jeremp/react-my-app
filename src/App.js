import React from 'react';
import TodoList from './item/TodoList';
import Banner from './banner/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <TodoList />            
    </div>
  );
}

export default App;
