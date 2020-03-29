import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import "./styles.css";
export default function Register() {
  const [name, setName] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();
  const handleRegister = async event => {
    event.preventDefault();
    const data = {
      name,
      email,
      wpp: whatsApp,
      city,
      uf
    };

    try {
      const response = await api.post("/ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
    } catch {
      alert(`Erro no cadastro, tente novamete`);
    }
    history.push("/");
  };
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadasro, entre na plataforma e ajude pessoas a encontrare
            os casos da sua ONG.
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsApp}
            onChange={e => setWhatsApp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
