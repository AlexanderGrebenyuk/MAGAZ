import React, { useEffect, useState } from'react';
import requestAxios from '../../services/axios';
import BasketItem from './BasketItem';


function Basket({ cards, user, basket, setBasket }) {
    console.log(basket);
    
    
  return (
    <div>
    <h1>Корзина</h1>

    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {basket.map((bask) => (
        <BasketItem bask={bask} key={bask.id} user={user} setBasket={setBasket} />
      ))}
    </div>
  </div>
  );
}

export default Basket;