import React from "react";
import styled from "styled-components";
import { Marginer } from "./Marginer";
import photo from "./../../../assets/pokebola-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 20px;
  color: #fff;
  font-weight: 800; ;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.button`
  padding: 10px 16px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const PokeLogo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: 50px;
  }
`;

export function CardDetails({ poke }) {
  return (
    <DetailsContainer>
      <MediumText>{poke.number}</MediumText>
      <SpacedHorizontalContainer>
        <MediumText>Type: {poke.type}</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <Details>Details</Details>
      </SpacedHorizontalContainer>
      <PokeLogo>
        <img src={photo} alt="pokebola" />
      </PokeLogo>
    </DetailsContainer>
  );
}
