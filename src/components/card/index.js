import React, { useEffect, useState } from "react";

import { gql, useLazyQuery } from "@apollo/client";
import Person from "./Person";
import List from "../list";
import { Btn, Loading, Renderizado } from "./style-component";

/* A query to the API of Rick and Morty. */
const API_PRUEBA = gql`
  query CHARACTER($valor: ID!) {
    character(id: $valor) {
      image
      name
      id
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      created
    }
  }
`;

const Card = () => {
  const [person, setPerson] = useState([]);

  const [getPerson, { loading, error, data }] = useLazyQuery(API_PRUEBA);



/* A hook that is executed when the component is mounted and when the data changes. */
  useEffect(() => {
    if (data !== undefined) {
    
      setPerson([...person, data.character]);
      // console.log(person);
    }
  }, [data]);

  if (loading)
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    );
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data === undefined ? (
        <Loading>
          <p>No se ha cargado ningún personaje</p>
          <Btn>
            <button
              onClick={() =>
                getPerson({
                  variables: { valor: Math.floor(Math.random() * 826) },
                })
              }
            >
              Generate
            </button>
          </Btn>
        </Loading>
      ) : (
        <Renderizado>
          <Person data={data.character} />
          <Btn>
            <button
              onClick={() =>
                getPerson({
                  variables: { valor: Math.floor(Math.random() * 826) },
                })
              }
            >
              Generate
            </button>
          </Btn>
          <center>
            <h2>List</h2>
          </center>
          <List person={person} />
        </Renderizado>
      )}
    </div>
  );
};

export default Card;
