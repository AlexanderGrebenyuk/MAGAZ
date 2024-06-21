import { NavLink } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import React from "react";
function Navbar({ user, title, setUser }) {
  const onHandleLOgout = async () => {
    const { data } = await requestAxios.get("/auth/logout");
    console.log(data);
    if (data.message === "success") {
      setAccessToken(undefined);
      setUser(undefined);
    }
  };
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/cards">Магазин</NavLink>
      <NavLink to="/baskets">Корзина</NavLink>
      <NavLink to="/profile">Личный кабинет</NavLink>

      {user ? (
        <button type="button" onClick={onHandleLOgout}>
          Выйти
        </button>
      ) : (
        <>
          <NavLink to="/registration">Регистрация</NavLink>
          <NavLink to="/authorization">Авторизация</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
