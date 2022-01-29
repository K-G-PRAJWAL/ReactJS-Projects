import React from 'react';
import ThemeToggler from './ThemeToggler';

const Header = () => {
    return (
        <header style={{ textAlign: "center" }}>
            <h1>Theme Toggler</h1>
            <p>Click icon below to switch mode</p>
            <ThemeToggler />
        </header>
    );
};

export default Header;
