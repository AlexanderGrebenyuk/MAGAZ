import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

function CardItem({ card, setCards }) {
  const onHandleDelete = async () => {
    const { data } = await request.delete(`/cards/${card.id}`);
    if (data.message === "success") {
      setCards((prev) => prev.filter((delCard) => delCard.id !== card.id));
    }
  };
  return (
    <div key={card.id}>
      <img
        src={`http://localhost:3000${card.img}`}
        alt="foto"
        className="imgCard"
      />
      <h3>{card.name}</h3>
      <p>{card.price}</p>
      <p>{card.city}</p>
      <Link to={`/cards/${card.id}`}>Подробнее</Link>
      <button onClick={onHandleDelete}>Удалить</button>
    </div>
  );
}

export default CardItem;
