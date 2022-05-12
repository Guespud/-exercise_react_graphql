import React from "react";
import { Container, Detail } from "./style-component";

const List = ({ person }) => {

  console.log(person)

  return (
    <>
    {person.map((character) =>
    <Container key={character.id}>
      <img src={character.image} alt={character.id} />
      <Detail>
        <span>{character.name}</span>
        <button >Detalle</button>
      </Detail>
    </Container>
      )}
    </>
  );
};

export default List;
