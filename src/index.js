import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import Days from "./Days";
import Seats from "./Seats";
import Success from "./Success";
import axios from "axios";

function App() {
  const [order, setOrder] = useState([]);
  const [data, setData] = useState({ movie: "", date: "", time: "" });
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  function sendData() {
      const idArray = [];
      order.forEach((element) => {idArray.push(element.id)});
      const params = {ids: idArray, name: name, cpf: cpf};
      const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many";
      axios.post(url, params);
  }

  function selectData(movie, date, time) {
    data.movie = movie;
    data.date = date;
    data.time = time;
    setData(data);
  }

  function selectSeat(selectedSeat) {
    if (!selectedSeat.isAvailable) {
      return;
    }

    if (isSelected(selectedSeat)) {
      const newArray = order.filter((option) => option !== selectedSeat);
      setOrder(newArray);
    } else {
      setOrder([...order, selectedSeat]);
    }
  }

  function isSelected(selectedSeat) {
    return order.find((option) => option === selectedSeat);
  }

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/sessoes/:idMovie" exact>
            <Days selectData={selectData} />
          </Route>
          <Route path="/assentos/:idSession" exact>
            <Seats
              selectSeat={selectSeat}
              isSelected={isSelected}
              setName={setName}
              setCpf={setCpf}
              sendData={sendData}
            />
          </Route>
          <Route path="/sucesso" exact>
            <Success name={name} cpf={cpf} order={order} data={data} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
