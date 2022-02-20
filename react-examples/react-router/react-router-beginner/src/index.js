import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'; // imports for react router to be added in index.js
import App from './App';
import Profile from './Profile';
import Cart from './Cart';
import PageNotFound from './PageNotFound';

// 'routing' handles all the routes
const routing = (
  // react-router v6
  <Router>
    {/* Provide all the routes under <Route></Route> followed by a path and the corresponding component to be rendered on that path.
     Also, a default path can be provided to handle error page. */}
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/other">Other</Link></li>
      </ul>
    </div>
  </Router >
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
