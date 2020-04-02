import React from "react";
import axios from "axios";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <div>
      This is the Users Page!
      {users.map(user => {
        return (
          <div key={user.id}>
            <Link href="/users/[id]" as={`/users/${user.id}`}>
              <a>{user.id}</a>
            </Link>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get("http://localhost:3000/api/users");
  return {
    props: {
      users: response.data
    }
  };
};

export default Users;
