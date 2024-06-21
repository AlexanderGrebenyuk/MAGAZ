import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import requestAxios from "../../services/axios";

function CardItem({basket, user, card, setCards }) {
  // const [isUpdate, setIsUpdate] = useState(false);
console.log('++',basket);
console.log('---',card);
  const onHandleDelete = async () => {
    const { data } = await requestAxios.delete(`/cards/${card.id}`);
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

  const onHandleAddCard = async() => {
    const {data} = await requestAxios.post('/baskets', {
      cardId: card.id, basketId: basket.id
    })
    
    console.log('=-=-=-=-=-',data);
  }

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

      {user && user.id === card.userId && (
        <button type="button" onClick={onHandleDelete}>
          Удалить
        </button>
      )}
      <button onClick={onHandleAddCard}>Добавить в корзину</button>
    </div>
  );
}

export default CardItem;
