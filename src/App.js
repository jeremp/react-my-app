import React from 'react';
import Container from '@material-ui/core/Container'
import TodoList from './item/TodoList';
import './App.css';

function App() {
  return (
    <Container maxWidth="sm">
      <TodoList />     
    </Container>
  );
}

export default App;
