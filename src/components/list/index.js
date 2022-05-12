import React, { useEffect, useState } from "react";
import { Container, Detail,Button } from "./style-component";
import Modal from './Modal'

const List = ({ data }) => {
  // const [Person, setPerson] = useState([]);
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   setPerson((prevPerson) => {
  //     return {
  //       ...prevPerson,
  //       data,
  //     };
  //   });

  //   console.log(Person);
  // }, [data]);

  return (
    <Container>
      <img src={data.character.image} alt={data.character.id} />
      <Detail>
        <span>{data.character.name}</span>
        <button onClick={() => setActive(true)}>Detalle</button>
      </Detail>
    </Container>
  );
};

export default List;
