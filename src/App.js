import React, { useState } from "react";
import logo from "./logo.svg";
import Icon from "./components/icons";

// This is from toastify npm code
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// this is from reactstrap npm
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setisCross] = useState(false);
  const [winMessage, setwinMessage] = useState("");

  const reloadGame = () => {
    // Setting all the states back to the default state
    setisCross(false);
    setwinMessage("");
    itemArray.fill("empty", 0, 9);            // fills items with empty form 0 to 9
  };

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && 
        itemArray[0] === itemArray[2] &&
        itemArray[0] !== "empty"){
          setwinMessage(`${itemArray[0]} won`);
      }else if(
        itemArray[3] !== "empty" && 
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5]){
            setwinMessage(`${itemArray[3]} won`)
      }else if(
        itemArray[6] !== "empty" && 
        itemArray[6] === itemArray[7] &&
        itemArray[7] === itemArray[8]){
            setwinMessage(`${itemArray[6]} won`)
      }else if(
        itemArray[0] !== "empty" && 
        itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6]){
          setwinMessage(`${itemArray[6]} won`)
      }else if(
        itemArray[1] !== "empty" && 
        itemArray[1] === itemArray[4] &&
        itemArray[4] === itemArray[7]){
          setwinMessage(`${itemArray[1]} won`)
      }else if(
        itemArray[2] !== "empty" && 
        itemArray[2] === itemArray[5] &&
        itemArray[5] === itemArray[8]){
          setwinMessage(`${itemArray[2]} won`)
      }else if(
        itemArray[0] !== "empty" && 
        itemArray[0] === itemArray[4] &&
        itemArray[4] === itemArray[8]){
          setwinMessage(`${itemArray[0]} won`)
      }else if(
        itemArray[2] !== "empty" && 
        itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6]){
          setwinMessage(`${itemArray[2]} won`)
      }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setisCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={ reloadGame }>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color = "warning" onClick={ ()=> changeItem(index) }>
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
};

export default App;
