import React, { useContext, useState } from 'react'
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import { v4 } from 'uuid'
import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../context/action.types'

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") return alert("Please enter to-do");
        const todo = {
            todoString,
            id: v4()
        };
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
        setTodoString("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter your to-do item"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="warning"
                        >
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm