import React from "react";
import Router from "next/router";
import axios from "axios";
import SignIn from "../components/SignIn";

const Login = () => {
  const handleLogin = async ({ email, password }) => {
    await axios.post("/api/login", { email, password }).catch(e => {
      throw new Error(e);
    });
    Router.push("/");
  };

  return <SignIn handleLogin={handleLogin} />;
};

export default Login;
