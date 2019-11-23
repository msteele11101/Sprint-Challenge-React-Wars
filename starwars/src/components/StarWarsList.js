import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import StarWarsChar from "./StarWarsChar";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function StarWarsList() {
  const [starWarschar, setStarWarsChar] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(response => {
      setStarWarsChar(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <MainDiv>
      {starWarschar.map(char => {
        return <StarWarsChar char={char} key={char.name} />;
      })}
    </MainDiv>
  );
}
