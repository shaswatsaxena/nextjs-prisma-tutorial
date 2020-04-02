import React, { useState } from "react";

const SignIn = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const processSignIn = async e => {
    e.preventDefault();
    try {
      //Call API
      await handleLogin({ email, password });
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={processSignIn}>
      {error && <p>{error}</p>}
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
