import { useState } from "react";
import CardItem from "./CardItem";
import React from "react";
function Cards({ user, cards, setCards }) {
  return (
    <div>
      <h1>Cards</h1>
      {/* <button
        style={{ margin: "50px", backgroundColor: isOpen ? "red" : "green" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "закрыть форму" : "открыть форму"}
      </button> */}
      <div>
        {cards &&
          cards.map((card) => (
            <CardItem
              card={card}
              key={card.id}
              setCards={setCards}
              user={user}
            />
          ))}
      </div>
    </div>
  );
}

export default Cards;
