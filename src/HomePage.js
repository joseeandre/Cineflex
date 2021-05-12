import { useState, useEffect } from 'react';
import Movie from "./Movie";
import axios from 'axios';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		requisicao.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

  return (
    <>
      <div class="page-title">Selecione o filme</div>
      <div class="movies-list">
        {movies.map((item) => (
          <Movie data={item} />
        ))}
      </div>
    </>
  );
}
