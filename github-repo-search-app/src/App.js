// React imports
import React, { useState } from 'react'

// Router imports 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Toastify imports
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// Style imports
import { } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Firebase imports
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import firebaseConfig from './Config/FirebaseConfig'

// Components imports
import Home from './Components/Pages/Home'
import Signin from './Components/Pages/Signin'
import Signup from './Components/Pages/Signup'
import PageNotFound from './Components/Pages/PageNotFound'
import Footer from './Components/Layout/Footer'
import NavBar from './Components/Layout/NavBar'

// Context import
import { UserContext } from './Context/UserContext'

firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route
            exact path="/"
            element={<Home />}
          />
          <Route
            exact path="/signin"
            element={<Signin />}
          />
          <Route
            exact path="/signup"
            element={<Signup />}
          />
          <Route
            exact path="*"
            element={<PageNotFound />}
          />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
