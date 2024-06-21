import React, { useState } from "react";
import requestAxios from "../../services/axios";
import './FormAddCard.css'

function FormAddCard({ setCards }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [wearRate, setWearRate] = useState("");
  const [city, setCity] = useState("");
  //   const [userId, setUserId] = useState(0);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await requestAxios.post("/cards", {
      name,
      img,
      price,
      wearRate,
      city,
    });

    if (data.message === "success") {
      setCards((prev) => [...prev, data.card]);
      setName("");
      setImg("");
      setPrice("");
      setWearRate("");
      setCity("");
    }
  };

  return (
    <div className="container" style={{marginTop: '20px', marginLeft: '350px', fontSize: '10px'}}>
      <h1>Выставить свою карточку</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="img"
          value={img}
          placeholder="img"
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={wearRate}
          placeholder="wearRate"
          onChange={(e) => setWearRate(e.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <input
          type="text"
          value={userId}
          placeholder="name"
          onChange={(e) => userId(e.target.value)}
        /> */}
        <button type="submit">создать карточку</button>
      </form>
    </div>
  );
}

export default FormAddCard;
