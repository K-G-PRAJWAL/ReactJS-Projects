import React, { useReducer, Suspense } from 'react'
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { TodoContext } from './context/TodoContext';
import todoReducer from './context/reducer';
// importing these components with react lazy for improving initial loading time 
const TodoForm= React.lazy(()=>import("./components/TodoForm"))
const Todos= React.lazy(()=>import("./components/Todos"))

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])


  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo Application</h1>
        <Suspense fallback={<div>loading...</div>}>
        <Todos />
        <TodoForm />
      </Suspense>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
