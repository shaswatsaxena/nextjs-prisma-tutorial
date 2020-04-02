import React, { useState } from "react";

const SignUp = ({ handleRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const processSignup = async e => {
    e.preventDefault();
    try {
      //Call API
      await handleRegister({ name, email, password });
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={processSignup}>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
