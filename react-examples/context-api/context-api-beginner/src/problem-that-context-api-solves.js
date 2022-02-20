import React, { useState } from "react";

// un-necessary passing of props to the GrandChild Component
const GrandChild = props => {
    return (
        <div>
            <h3>Grandchild: </h3>
            {/* 
            This un-necessary passing of props to child props through many components is called Props Drilling.
            This is what Context API solves.
            https://reactjs.org/docs/context.html - "Context provides a way to pass data through the component tree without having to pass props down manually at every level." 
            */}
            <Child brand={props.brand} />
        </div>
    );
};

const Child = props => {
    return (
        // final use of props is here
        <div>
            <h2>Child: {props.brand}</h2>
        </div>
    );
};

const App = () => {
    const [brandname] = useState("Amazon");
    return (
        <div>
            <h1>Hello World</h1>
            <GrandChild brand={brandname} />
        </div>
    );
};

export default App;