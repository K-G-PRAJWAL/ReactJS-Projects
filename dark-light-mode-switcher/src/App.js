import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Meat from './components/Meat';

const App = () => {
    const themeHook = useState("light")
    return (
        <ThemeContext.Provider value={themeHook}>
            <div>
                <Header />
                <Meat />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
