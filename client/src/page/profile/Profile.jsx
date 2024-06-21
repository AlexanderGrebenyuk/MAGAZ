import React from "react";
import { useState } from "react";
import FormAddCard from "../cards/FormAddCard";
import CardItem from "../cards/CardItem";
function Profile({ user, cards, setCards }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p style={{fontSize: '40px'}}>Профиль</p>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "закрыть форму" : "открыть форму"}
      </button>
      {isOpen && <FormAddCard setCards={setCards} />}
    </div>
  );
}

export default Profile;
