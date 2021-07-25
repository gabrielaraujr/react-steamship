import React, { useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styled";

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (email === "") {
      toast.warning("Digite um e-mail!");
    }

    if (email && !email.includes("@")) {
      toast.warning("Digite um e-mail válido!");
    }

    if (email && email.includes("@")) {
      localStorage.setItem("email", email);
      toast.success("Email cadastrado com sucesso!");
    }

    setEmail("");
  };

  return (
    <S.NewsletterForm onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        value={email}
        placeholder="email@exemplo.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Button type="submit">Enviar</S.Button>
    </S.NewsletterForm>
  );
};

export default NewsletterForm;
