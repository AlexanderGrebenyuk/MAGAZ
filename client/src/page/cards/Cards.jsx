import { useState } from "react";
import CardItem from "./CardItem";
import React from "react";
function Cards({ user, cards, setCards,basket }) {

  return (
    <div>
      <h1>Карточки</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <CardItem card={card} key={card.id} setCards={setCards} user={user} basket={basket} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
