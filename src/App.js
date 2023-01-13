import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <section>
      <h1>Display User Data</h1>
      <Link to="/users">
        <button>View User Data</button>
      </Link>
    </section>
  );
};
export default App;
