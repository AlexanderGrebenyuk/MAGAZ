import { useEffect, useState } from "react";
import "./App.css";
import requestAxios, { setAccessToken } from "../services/axios";
import { Route, Routes } from "react-router-dom";
import Main from "../page/main/Main";
import Cards from "../page/cards/Cards";
import Registration from "../page/auth/Registration";
import Authorization from "../page/auth/Authorization";
import Navbar from "../page/navbar/Navbar";
import Profile from "../page/profile/Profile";

function App() {
  const [user, setUser] = useState(undefined);
  const [cards, setCards] = useState([]);

  const axiosCards = async () => {
    console.log("asd");
    const { data } = await requestAxios.get("/cards");
    if (data.message === "success") {
      setCards(data.cards);
    }
  };
  const axiosCheckUser = async () => {
    const { data } = await requestAxios.get("/tokens/refresh");
    if (data.message === "success") {
      setUser(data.user);
      setAccessToken(data.accessToken);
    }
  };

  useEffect(() => {
    axiosCards();
    axiosCheckUser();
  }, []);

  return (
    <>
      <div>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/cards"
            element={<Cards cards={cards} setCards={setCards} user={user} />}
          />
          <Route
            path="/registration"
            element={<Registration setUser={setUser} />}
          />
          <Route
            path="/authorization"
            element={<Authorization setUser={setUser} />}
          />
          <Route path="/profile" element={<Profile cards={cards} />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
