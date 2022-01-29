import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from './Theme';

const Meat = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>Context API Dark -Light Mode Switcher</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button style={{
                backgroundColor: "#3DBE29",
                color: "#fff",
                padding: "10px 150px",
                border: `${currentTheme.border}`,
                fontSize: "20px"
            }}>Random Button!</button>
        </div>
    )
}

export default Meat;