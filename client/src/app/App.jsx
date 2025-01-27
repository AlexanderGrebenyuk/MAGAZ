import { useEffect, useState } from 'react';
import './App.css';
import requestAxios, { setAccessToken } from '../services/axios';
import { Route, Routes } from 'react-router-dom';
import Main from '../page/main/Main';
import Cards from '../page/cards/Cards';
import Registration from '../page/auth/Registration';
import Authorization from '../page/auth/Authorization';
import Navbar from '../page/navbar/Navbar';
import Profile from '../page/profile/Profile';
import Basket from '../page/basket/Basket';

function App() {
  const [user, setUser] = useState(undefined);
  const [cards, setCards] = useState([]);
  const [basket, setBasket] = useState([]);
  console.log(basket);
  const axiosCards = async () => {
    const { data } = await requestAxios.get('/cards');
    if (data.message === 'success') {
      setCards(data.cards);
    }
  };

  const axiosCheckUser = async () => {
    const { data } = await requestAxios.get('/tokens/refresh');
    if (data.message === 'success') {
      setUser(data.user);
      setAccessToken(data.accessToken);
    }
  };
  const axiosBasket = async () => {
    const { data } = await requestAxios.get('/baskets');
    if (data.message === 'success') {
      // console.log('=====', data);
      setBasket(data.basketCards.Cards);
    }
  };

  useEffect(() => {
    axiosCards();
    axiosCheckUser();
    axiosBasket();
  }, []);

  return (
    <>
      <div>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/cards"
            element={
              <Cards
                basket={basket}
                cards={cards}
                setCards={setCards}
                user={user}
              />
            }
          />
          <Route
            path="/registration"
            element={<Registration setUser={setUser} />}
          />
          <Route
            path="/authorization"
            element={<Authorization setUser={setUser} />}
          />
          <Route
            path="/profile"
            element={<Profile cards={cards} setCards={setCards} />}
          />
          <Route
            path="/baskets"
            element={
              <Basket
                user={user}
                cards={cards}
                basket={basket}
                setBasket={setBasket}
              />
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
