import React from "react";
import styled from 'styled-components';
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {

  return (
    <MainDashContainer>
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </MainDashContainer>
  )
}

export default MainDash;

const MainDashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`