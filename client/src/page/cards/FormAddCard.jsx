import React, { useState } from "react";

function FormAddCard({ setCards }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState();
  const [price, setPrice] = useState(0);
  const [wearRate, setWearRate] = useState("");
  const [city, setCity] = useState("");
  const [userId, setUserId] = useState(1);
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await requestAxios.post("/movies", {
      name,
      img,
      price,
      wearRate,
      city,
      userId,
    });
    if (data.message === "success") {
      setCards((prev) => [...prev, data.card]);
      setName("");
      setImg(0);
      setPrice("");
      setWearRate("");
      setCity("");
      setUserId(1);
    }
  };

  return (
    <div>
      <h1>Выставить свою карточку</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          nChange={(e) => setName(e.target.value)}
        />
        <input
          type="img"
          value={img}
          placeholder="img"
          nChange={(e) => setImg(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="price"
          nChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={wearRate}
          placeholder="wearRate"
          nChange={(e) => setWearRate(e.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="city"
          nChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={userId}
          placeholder="name"
          nChange={(e) => userId(e.target.value)}
        />
        <button type="submit">создать карточку</button>
      </form>
    </div>
  );
}

export default FormAddCard;
