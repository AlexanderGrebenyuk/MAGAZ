import { useState } from "react";
import CardItem from "./CardItem";
import React from "react";
function Cards({ user, cards, setCards }) {
  console.log(cards);
  return (
    <div>
      <h1>Cards</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <CardItem card={card} key={card.id} setCards={setCards} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
