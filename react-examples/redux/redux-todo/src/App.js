import React from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todos />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
