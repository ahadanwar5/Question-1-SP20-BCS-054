import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  // throw new Error(" ERROR ");
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  let data = await response.json();
  return data;
}

const Slug = () => {

  const todo = useLoaderData();
  console.log(todo);
  return (
    <div className="todoDetailCard">
      <h1>User Data</h1>
      <p>
        <p className="label">User ID: {todo.id}</p>
        <p className="label">Name: {todo.name}</p>
        <p className="label">Username: {todo.username}</p>
        <p className="label">Email: {todo.email}</p>
        <p className="label">Address: {todo.address.street} {todo.address.suite} {todo.address.city}</p>
      </p>
    </div>
  );
};
export default Slug;
