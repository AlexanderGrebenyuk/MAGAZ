import React from "react";
function CardItem({ card, setCards }) {
  const onHandleDelete = async () => {
    const { data } = await request.delete(`/cards/${card.id}`);
    if (data.message === "success") {
      setCards((prev) => prev.filter((delCard) => delCard.id !== card.id));
    }
  };
  return (
    <div key={card.id}>
      <img src={card.img} alt="foto" />
      <h3>{card.name}</h3>
      <p>{card.price}</p>
      <p>{card.city}</p>
      <Link to={`/movies/${movie.id}`}>Подробнее</Link>
      <button onClick={onHandleDelete}>Удалить</button>
    </div>
  );
}

export default CardItem;
