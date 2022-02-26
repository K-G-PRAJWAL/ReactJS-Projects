import React, { useState, useContext } from "react";
import Axios from "axios";
import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import UserCard from "../Layout/UserCard";
import Details from "../Layout/Details";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { toast } from "react-toastify";


const Home = () => {
    const context = useContext(UserContext)
    const [query, setQuery] = useState("")
    const [user, setUser] = useState(null)

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log(data)
        } catch (err) {
            toast("Unable to locate the user", {
                type: "error"
            })
        }
    }

    if (!context.user?.uid) {
        return <Navigate to="/signin" />
    }

    return (
        <Container>
            <Row className=" mt-3">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            placeholder="Please provide the username"
                            onChange={e => setQuery(e.target.value)}
                        />
                        <InputGroupAddon addonType="append">
                            <Button onClick={fetchDetails} color="primary">Fetch User</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {user ?
                        <UserCard user={user} /> :
                        null
                    }
                </Col>
                <Col md="7">
                    {user ? <Details apiUrl={user.repos_url} /> : null}
                </Col>
            </Row>
        </Container>
    );
}

export default Home