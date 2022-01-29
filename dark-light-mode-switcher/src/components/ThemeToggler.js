import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div style={{ cursor: 'pointer' }}
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light");
            }}>
            <p>{themeMode === "light" ? <FaMoon /> : <FaSun />}</p>
        </div>

    )
}

export default ThemeToggler;