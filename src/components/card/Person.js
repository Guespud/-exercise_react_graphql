import React from 'react'
import {
    BodyContainer,
    Container,
    Image,
    CardAnimate,
    ContainerCard,
    ContainerHeadCard,
    Separate,
    Atributtes,
    ContainerAtributtes,
    ContainerBodyCard,
  } from "./style-component";

const Person = ({data}) => {
  return (
    <BodyContainer>
      <Container>
        <Image>
          <img src={data.character.image} alt="" />
        </Image>
        <ContainerCard>
          <CardAnimate>
            <ContainerHeadCard>
              <h5>{data.character.name}</h5>
              <h6>CHARACTER ID: {data.character.id}</h6>
            </ContainerHeadCard>
            <ContainerBodyCard>
              {/* atributes api charapter */}
              <ContainerAtributtes>
                <Atributtes>Status:</Atributtes> {data.character.status}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Species:</Atributtes> {data.character.species}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Type:</Atributtes> {data.character.type}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Gender:</Atributtes> {data.character.gender}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Origin:</Atributtes> {data.character.origin.name}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Location:</Atributtes>{" "}
                {data.character.location.name}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Created at:</Atributtes> {data.character.created}
              </ContainerAtributtes>
            </ContainerBodyCard>
          </CardAnimate>
        </ContainerCard>
      </Container>
    </BodyContainer>
  )
}

export default Person