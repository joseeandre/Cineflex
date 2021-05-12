import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Seats(props) {
  const { selectSeat, isSelected, setName, setCpf, sendData } = props;
  const [seats, setSeats] = useState({
    name: "",
    day: { weekday: "" },
    seats: [],
    movie: { posterURL: "" },
  });
  const params = useParams();
  const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`;
  const seatsList = seats.seats;
  //   const [selected, setSelected] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(url);

    requisicao.then((resposta) => {
      setSeats(resposta.data);
    });
  }, []);

  //   function selectSeat(selectedSeat) {
  //     if (!selectedSeat.isAvailable) {
  //       return;
  //     }

  //     if (isSelected(selectedSeat)) {
  //       const novoArray = selected.filter((option) => option != selectedSeat);
  //       setSelected(novoArray);
  //     } else {
  //       setSelected([...selected, selectedSeat]);
  //     }
  //   }

  //   function isSelected(selectedSeat) {
  //     return selected.find((option) => option === selectedSeat);
  //   }

  return (
    <>
      <div class="page-title">Selecione o(s) assento(s)</div>
      <div class="seats">
        {seatsList.map((seat) => (
          <div
            class={
              seat.isAvailable
                ? isSelected(seat)
                  ? "seat selected-seat"
                  : "seat"
                : "seat unavaible-seat"
            }
            onClick={() => selectSeat(seat)}
          >
            {seat.name}
          </div>
        ))}
      </div>
      <div class="examples">
        <div class="example">
          <div class="seat selected-seat"></div>
          <h3>Selecionado</h3>
        </div>
        <div class="example">
          <div class="seat"></div>
          <h3>Disponível</h3>
        </div>
        <div class="example">
          <div class="seat unavaible-seat"></div>
          <h3>Indisponível</h3>
        </div>
      </div>
      <div class="data">
        <h2>Nome do comprador:</h2>
        <input type="text" placeholder="Digite seu nome..." onChange={e => setName(e.target.value)}/>
        <h2>CPF do comprador:</h2>
        <input type="text" placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)}/>
      </div>
      <Link to="/sucesso" class="booking" onClick={sendData}>
        Reservar assento(s)
      </Link>
      <div class="footer">
        <div class="box-image">
          <img src={seats.movie.posterURL} />
        </div>
        <div class="title">
          {seats.movie.title}
          <br />
          {seats.day.weekday} - {seats.name}
        </div>
      </div>
    </>
  );
}
