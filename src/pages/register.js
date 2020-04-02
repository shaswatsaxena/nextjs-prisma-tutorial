import React from "react";
import Router from "next/router";
import axios from "axios";
import SignUp from "../components/SignUp";

const Register = () => {
  const handleRegister = async ({ name, email, password }) => {
    await axios.post("/api/users", { name, email, password }).catch(e => {
      throw new Error(e);
    });
    Router.push("/login");
  };

  return <SignUp handleRegister={handleRegister} />;
};

export default Register;
