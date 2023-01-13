import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  // throw new Error(" ERROR ");
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}

const Users = () => {
  const todos = useLoaderData();

  return (
    <ul className="todos">
      <h1>User Data</h1>
      {todos?.map((todo) => (
        <Link to={`/users/${todo.id}`} key={todo.id}>
          <li className="todo"> {todo.name}</li>
        </Link>
      ))}
    </ul>
  );
};
export default Users;
