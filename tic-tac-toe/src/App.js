import React, { useState } from 'react';
import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const winSituations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkIsWinner = () => {
    for (let i = 0; i < winSituations.length; i++) {
      if (itemArray[winSituations[i][0]] !== "empty" &&
        itemArray[winSituations[i][0]] === itemArray[winSituations[i][1]] &&
        itemArray[winSituations[i][0]] === itemArray[winSituations[i][2]]) {
        setWinMessage(`${itemArray[winSituations[i][0]]} wins!`);
      }
    }
  }

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Please choose another box", { type: "error" });
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {
            winMessage ?
              (
                <div className="mb-2 mt-2">
                  <h1 className='text-success text-uppercase text-center'>{winMessage}</h1>
                  <Button color="success" block onClick={reloadGame}>Reload</Button>
                </div>
              )
              :
              (
                <h1 className='text-center text-warning'>It's the turn of {isCross ? "Cross" : "Circle"}</h1>
              )
          }
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} color="warning">
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
