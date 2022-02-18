import React, { useState } from 'react'
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, Container } from 'reactstrap'
import { v4 } from 'uuid'


const InputForm = ({ addTodos }) => {
    const [todoString, setTodostring] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoString === "") return alert("Please enter a To-do")
        const todo = {
            todoVal: todoString,
            id: v4()
        }
        addTodos(todo)
        setTodostring("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Enter To-do" value={todoString} onChange={e => setTodostring(e.target.value)} />
                    <InputGroupAddon addonType="prepend" >
                        <Button color="warning">
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default InputForm