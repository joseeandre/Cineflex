import { Link } from "react-router-dom";

export default function Success(props) {
  const { name, cpf, order, data, resetData } = props;

  return (
    <>
      <div class="page-title success">
        Pedido feito <br /> com sucesso!
      </div>
      <div class="confirm">
        <strong>Filme e sessao</strong>
        <div class="title">{data.movie}</div>
        <div class="title">{data.date} - {data.time}</div>
        <strong>Ingressos</strong>
        {order.map((item) => <div class="title">Assento {item.name}</div>)}
        <strong>Comprador</strong>
        <div class="title">Nome: {name}</div>
        <div class="title">CPF: {cpf}</div>
      </div>
      <Link to="/" class="booking" onClick={resetData}>Voltar pra home</Link>
    </>
  );
}
