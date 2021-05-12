import { Link } from "react-router-dom";

export default function Session(session) {
  const { data } = session;
  const showTimes = data.showtimes;
  return (
    <>
      <div class="day">
        {data.weekday} - {data.date}
      </div>
      <div class="times">
        {showTimes.map((time) => (
          <Link to={`/assentos/${time.id}`} class="time">
            {time.name}
          </Link>
        ))}
      </div>
    </>
  );
}
