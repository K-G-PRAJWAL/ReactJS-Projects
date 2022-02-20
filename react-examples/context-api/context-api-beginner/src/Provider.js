import React, { useState } from 'react';
import MyContext from './context';

const Provider = props => {
    const [mission, setMission] = useState({
        missonName: "Defuse a bomb",
        agent: "007",
        accepted: "N"
    });

    return (
        // https://reactjs.org/docs/context.html#contextprovider
        <MyContext.Provider
            value={{
                data: mission,
                isMissionAccepted: () => {
                    setMission({ ...mission, accepted: "Y" });
                }
            }}
        >
            {props.children}
        </MyContext.Provider>
    )
}

export default Provider;