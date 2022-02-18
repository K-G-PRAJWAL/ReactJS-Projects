import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheck } from 'react-icons/fa'

const Todo = ({ todos, completedFlag }) => {
    return (
        <ListGroup className='m-5 mb-2 items'>
            {
                todos.map((todo => (
                    <ListGroupItem key={todo.id}>
                        {todo.todoVal}
                        <span className='float-end' onClick={() => completedFlag(todo.id)} ><FaCheck /></span>
                    </ListGroupItem>
                )))
            }
        </ListGroup>
    )
}

export default Todo