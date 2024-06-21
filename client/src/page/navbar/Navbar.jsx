import { NavLink } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import React from "react";
import './NavBar.css';

function Navbar({ user, title, setUser }) {
  const onHandleLogout = async () => {
    const { data } = await requestAxios.get("/auth/logout");
    console.log(data);
    if (data.message === "success") {
      setAccessToken(undefined);
      setUser(undefined);
    }
  };

  return (
    <nav>
      
      <div className="nav-links">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/cards">Магазин</NavLink>
        <NavLink to="/baskets">Корзина</NavLink>
        <NavLink to="/profile">Профиль</NavLink>
        {user ? (
          <>
            <button type="button" onClick={onHandleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/authorization">Авторизация</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
