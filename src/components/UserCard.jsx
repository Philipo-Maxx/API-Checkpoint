import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ name, username, email, website, phone }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{username}</p>
          <p>{email}</p>
          <p>{website}</p>
          <p>{phone}</p>
        </Card.Text>
      </Card.Body>
      ;
    </Card>
  );
};

export default UserCard;
