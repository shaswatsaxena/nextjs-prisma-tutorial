import React from "react";
import axios from "axios";

const User = ({ user }) => {
  return (
    <div>
      This is the User{user.id} Page!
      <p>{user.id}</p>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const userPaths = response.data.map(user => ({
    params: { id: user.id.toString() }
  }));

  return {
    paths: userPaths,
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const userId = ctx.params.id;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return {
    props: {
      user: response.data
    }
  };
};

export default User;
