import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import email from "../assests/email.svg";
import phone from "../assests/phone.svg";
import location from "../assests/location.svg";
import { CardContainer, Image, Text, Container, Info } from "./CardStyle";

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    await axios("https://randomuser.me/api")
      .then((res) => res.data.results[0])
      .then((res) => setUsers(res));
  };
  console.log(users);

  return (
    <Container>
      <CardContainer>
        <Image>
          <img src={users.picture?.large} />
          <p>
            {""}
            {users.name?.title} {users.name?.first} {users.name?.last}{" "}
          </p>
        </Image>
        <Text>
          <img src={email} />
          <p> {users.email} </p>
        </Text>
        <Text>
          <img src={phone} />
          <p> {users.cell} </p>
        </Text>
        <Text>
          <img src={location} />
          <p>
            {" "}
            {users.location?.city} {users.location?.country}{" "}
          </p>
        </Text>
        <Info>
          <p> Age: {users.registered?.age} </p>
          <p> Registered Date: {users.registered?.date.slice(0, 10)} </p>
        </Info>
      </CardContainer>

      <Button onClick={data} variant="contained">
        Random User
      </Button>
    </Container>
  );
};
export default Card;
