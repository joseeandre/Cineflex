import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Session from "./Session";

export default function Days(props) {
  const { selectData } = props;
  const [days, setDays] = useState({days:[]});
  const params = useParams();
  const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.idMovie}/showtimes`;
  const sessions = days.days;

  useEffect(() => {
    const requisicao = axios.get(url);

    requisicao.then((resposta) => {
      setDays(resposta.data);
    });
  }, []);

  return (
    <>
      <div class="page-title">Selecione o horário</div>
      <div class="sessions">
        {sessions.map((day) => (
          <Session data={day} selectData={selectData} movie={days.title} />
        ))}
      </div>
      <div class="footer">
        <div class="box-image"><img src={days.posterURL} /></div>
        <div class="title">{days.title}</div>
      </div>
    </>
  );
}
