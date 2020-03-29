import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();
  const handleLogon = async event => {
    event.preventDefault();

    try {
      const response = await api.post("/section", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch {
      alert("Falha no login, tente novamente");
    }
  };
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} />
        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua Id"
            value={id}
            onChange={event => {
              setId(event.target.value);
            }}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="" />
    </div>
  );
}

export default Logon;