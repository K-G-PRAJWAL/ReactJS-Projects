import React, { Fragment } from 'react';
import MyContext from './context';
import Provider from './Provider';

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <MyContext.Consumer>
      {
        context => (
          <Fragment>
            <h3> Agent Info </h3>
            <p>Mission Name: {context.data.missonName}</p>
            <p>Mission Status: {context.data.accepted}</p>
            <button onClick={context.isMissionAccepted}>ACCEPT</button>
          </Fragment>
        )
      }
    </MyContext.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>
        Context API
      </h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;