import { NavLink } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import React from "react";
function navbar({ title }) {
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
      <NavLink to="/card">Магазин</NavLink>
      <NavLink to="/basket">Корзина</NavLink>
      {user ? (
        <button type="button" onClick={onHandleLOgout}></button>
      ) : (
        <>
          <NavLink to="/registration">Регистрация</NavLink>
          <NavLink to="/authorization">Авторизация</NavLink>
        </>
      )}
    </nav>
  );
}

export default navbar;
