import React from "react";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [users, setUsers] = useState({ users: [], show: false });
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    setUsers({
      ...users,
      users: JSON.parse(localStorage.getItem("users")) || [],
    });
  }, [users.show]);
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data));
      })
      .catch((error) => console.log(error));
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    setUsers({ ...users, show: !users.show });
  };
  return (
    <div
      style={{
        backgroundColor: "#010101",
        height: "100%",
        padding: "20px",
        paddingBottom: "50px",
      }}
    >
      <div className="text-center mt-5 mb-5">
        <Button
          variant="primary"
          className="align-self-center"
          onClick={handleOnClick}
        >
          {users.show ? `Hide Users` : `Load Users`}
        </Button>
      </div>
      {users.show ? <UserList users={users.users} /> : <div />}
    </div>
  );
}

export default App;
