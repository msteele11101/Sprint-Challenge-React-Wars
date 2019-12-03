import React from "react";
import styled from "styled-components";

const StarWarsChars = styled.div`
  margin: 10px;
  background-color: #a34a28;
  border: 5px solid #f58b54;
  width: 400px;
  height: 340px;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-size: 1.8rem;
  color: #dfddc7;
  font-family: Arial;
`;
const CharInfo = styled.p`
  color: #dfddc7;
  font-family: Arial;
`;
const SWButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #fce2c1;
  background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
  background-color: #ffc477;
  border-radius: 6px;
  border: 1px solid #eeb44f;
  margin: 10px 50px 20px;
  display: inline;
  cursor: pointer;
  color: #dfddc7;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #cc9f52;
  &:hover {
    background:linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
	background-color:#fb9e25;
  }
`;

function StarWarsChar(props) {
  return (
    <StarWarsChars>
      <MainDiv>
        <H1>{props.char.name}</H1>
        <CharInfo>Birth Year: {props.char.birth_year}</CharInfo>
        <CharInfo>Eye Color: {props.char.eye_color}</CharInfo>
        <CharInfo>Height: {props.char.height}</CharInfo>
        <CharInfo>Mass: {props.char.mass}</CharInfo>
        <SWButton> More Info </SWButton>
      </MainDiv>
    </StarWarsChars>
  );
}

export default StarWarsChar;
