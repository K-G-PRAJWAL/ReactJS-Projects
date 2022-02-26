import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText,
    Collapse
} from 'reactstrap'
import { UserContext } from '../../Context/UserContext'

const NavBar = () => {
    const context = useContext(UserContext)
    const [isToggled, setIsToggled] = useState(false)

    const toggle = () => setIsToggled(!isToggled)

    return (
        <Navbar
            color="danger"
            light
            expand="md"
        >
            <NavbarBrand>
                <Link to="/" className='text-white'>Github Repo Search App</Link>
            </NavbarBrand>
            <NavbarText className='text-white'>
                Welcome, {context.user?.email ? context.user?.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isToggled} navbar>
                <Nav navbar style={{ marginLeft: "auto" }}>
                    {
                        context.user ?
                            (
                                <NavItem>
                                    <NavLink onClick={() => { context.setUser(null) }} className='text-white'>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            ) :
                            (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} to="/signup" className='text-white'>
                                            Signup
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/signin" className='text-white'>
                                            Signin
                                        </NavLink>
                                    </NavItem>
                                </>
                            )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar