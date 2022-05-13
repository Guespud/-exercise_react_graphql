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

  // console.log(data)

  return (
    <BodyContainer>
      <Container>
        <Image>
          <img src={data.image} alt="" />
        </Image>
        <ContainerCard>
          <CardAnimate>
            <ContainerHeadCard>
              <h5>{data.name}</h5>
              <h6>CHARACTER ID: {data.id}</h6>
            </ContainerHeadCard>
            <ContainerBodyCard>
              {/* atributes api charapter */}
              <ContainerAtributtes>
                <Atributtes>Status:</Atributtes> {data.status}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Species:</Atributtes> {data.species}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Type:</Atributtes> {data.type}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Gender:</Atributtes> {data.gender}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Origin:</Atributtes> {data.origin.name}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Location:</Atributtes>{" "}
                {data.location.name}
              </ContainerAtributtes>
              <Separate />
              <ContainerAtributtes>
                <Atributtes>Created at:</Atributtes> {data.created}
              </ContainerAtributtes>
            </ContainerBodyCard>
          </CardAnimate>
        </ContainerCard>
      </Container>
    </BodyContainer>
  )
}

export default Person