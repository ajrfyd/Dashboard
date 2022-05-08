import React from "react";
import styled from 'styled-components';
import { CardsData } from "../Data/Data";
import Card from "../Card/Card";

const Cards = () => {

  return (
    <CardsContainer>
      {
        CardsData.map((item, idx) => (
          <ParentContainer key={idx}>
            <Card 
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value={item.value}
              png={item.png}
              series={item.series}
            />
          </ParentContainer>
        ))
      }
    </CardsContainer>
  )
}

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`
const ParentContainer = styled.div`
  width: 100%;

  @media (max-width: 1200px) {
    height: 9rem;
  }

  
`