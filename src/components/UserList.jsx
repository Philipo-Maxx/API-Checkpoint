import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "./UserCard";
const UserList = ({ users }) => {
  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col key={user.id} className="mb-3">
            <UserCard
              name={user.name}
              username={user.username}
              email={user.email}
              website={user.website}
              phone={user.phone}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
