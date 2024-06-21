import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import requestAxios from "../../services/axios";

function CardItem({ user, card, setCards }) {
  // const [isUpdate, setIsUpdate] = useState(false);

  const onHandleDelete = async () => {
    const { data } = await request.delete(`/cards/${card.id}`);
    if (data.message === "success") {
      setCards((prev) => prev.filter((delCard) => delCard.id !== card.id));
    }
  };
  // const onHandleGetBasket = async () => {
  //   const { data } = await request.(`/cards/${card.id}`);
  //   if (data.message === "success") {
  //     setCards((prev) => prev.filter((delCard) => delCard.id !== card.id));
  //   }
  // };
  return (
    <div className="card" key={card.id}>
      <img
        src={`http://localhost:3000${card.img}`}
        alt="foto"
        className="imgCard"
      />
      <h3>{card.name}</h3>
      <p>{card.price}</p>
      <p>{card.city}</p>

      {user && user.id === card.UserId && (
        <button type="button" onClick={onHandleDelete}>
          Удалить
        </button>
      )}
      <button>Добавить в корзину</button>
    </div>
  );
}

export default CardItem;
