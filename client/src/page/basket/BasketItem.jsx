import React, { useEffect, useState } from'react';
import requestAxios from '../../services/axios';



function BasketItem({ user, bask, setBasket }) {

  const[basketItem, setBasketItem] = useState([])

  const axiosItemBasket = async () => {
    const { data } = await requestAxios.get("/baskets");
    if (data.message === "success") {
      setBasketItem(data.basketCards);
    }
  };

  useEffect(() => {
    axiosItemBasket()
  }, []);

  
  const onHandleDeleteItem = async () => {
    console.log(basketItem);
    const { data } = await requestAxios.delete(`/baskets/basketLines/${basketItem.id}`);
    if (data.message === "success") {
      setBasket((prev) => prev.filter((el) => el.id !== bask.id));

    }
  }
  return (
    <>
      <div className="card" key={bask.id}>
      <img
        src={`http://localhost:3000${bask.img}`}
        alt="foto"
        className="imgCard"
      />
      <h3>{bask.name}</h3>
      <p>{bask.price}</p>
      <p>{bask.city}</p>
      <button onClick={onHandleDeleteItem}>Удалить</button>
    </div>
    </>

  );
}

export default BasketItem;