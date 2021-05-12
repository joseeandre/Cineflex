import { Link } from "react-router-dom";

export default function Movie(movie) {
  const { data } = movie;
  const url = `/sessoes/${data.id}`;
  return (
    <Link to={url} class="movie">
        <img src={data.posterURL} />
    </Link>
  );
}
