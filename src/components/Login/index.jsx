import { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Display from "../Display";
import "./styles.css";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [data, setData] = useState(false);
  const [information, setInformation] = useState(false);

  const submitLogin = (data) => {
    setData(data);
  };

  useEffect(() => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => setInformation(response))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(submitLogin)}>
        <input
          type="text"
          className="input"
          placeholder=" Digite seu usuário"
          {...register("username")}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input
          type="password"
          className="input"
          placeholder=" Digite sua senha"
          {...register("password")}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <button type="submit" className="button-submit">
          Log in
        </button>
      </form>
      {data && <Display information={information} />}
    </>
  );
};

export default Login;
