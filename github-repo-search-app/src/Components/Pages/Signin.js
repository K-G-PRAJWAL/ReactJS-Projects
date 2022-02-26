import React, { useContext, useState } from 'react'
import {
    Container,
    Form,
    FormGroup,
    Label,
    Col,
    Row,
    Input,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter
} from 'reactstrap'
import firebase from 'firebase/compat/app'
import { UserContext } from '../../Context/UserContext'
import { Route, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signin = () => {
    const context = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res)
                context.setUser({
                    email: res.user.email,
                    uid: res.user.uid
                })
            })
            .catch(err => {
                console.log(err);
                toast(err.message, {
                    type: 'error'
                })
            })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        handleSignup()
    }

    if (context.user?.uid) {
        return (
            <Navigate to="/" replace />
        )
    }
    return (
        <Container className='text-center'>
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                    <Card>
                        <Form onSubmit={handleFormSubmit}>
                            <CardHeader className=''>SignIn here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for='email' sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Your Email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='password' sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Your Password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' block color='primary'>
                                    Sign In
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default Signin