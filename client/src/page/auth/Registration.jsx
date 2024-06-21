import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import './Registr.css'

function Registration({setUser}) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [city, setCity] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        name.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        city.trim() === ""
      ) {
        res.status(400).json({ message: "заполните все поля" });
        return;
      }
      if (password.trim() === cpassword.trim()) {
      
        const { data } = await requestAxios.post("/auth/registration", {
          name,
          email,
          password,
          city,
        });
      
        if (data.message === "success") {
          setUser(data.user);
          setAccessToken(data.accessToken);
          navigate("/");
        }
        return;
      } 
      setError("Пароли не совпадают");
      return;
    } catch ({ message }) {
      setError(message);
    }
  };
  return (
    <div className="container" style={{marginTop: '30px', marginLeft: "300px"}}>
      <h1 style={{fontSize: '30px'}}>Регистрация</h1>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="alex@mail.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="chek password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>
        <label htmlFor="city">
          <input
            type="text"
            placeholder="your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
