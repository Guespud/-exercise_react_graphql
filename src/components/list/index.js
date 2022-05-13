import React,{useState} from "react";
import { Container, Detail } from "./style-component";
import { Button } from "./style-component.modal";
import Modal from "./Modal";


const List = ({ person }) => {

  const [active, setActive] = useState(false);
  const [dataPerson, setDataPerson] = useState(false);

  const OpenModal = (id) =>{

    // console.log(id, 'hola')
    setActive(true)
    const updatedItems = person.filter((item) => item.id === id);
    
    // console.log(updatedItems)
    setDataPerson(updatedItems[0])


  }

  return (
    <>
    {person.map((character) =>
    <Container key={character.id}>
      <img src={character.image} alt={character.id} />
      <Detail>
        <span>{character.name}</span>
        <Button onClick={() => OpenModal(character.id)}>Open Modal</Button>
      </Detail>
    </Container>
      )}
      <Modal
        data={dataPerson}
        active={active}
        hideModal={() => setActive(false)}
      >
        Modal body content goes here..
      </Modal>
    </>
  );
};

export default List;
