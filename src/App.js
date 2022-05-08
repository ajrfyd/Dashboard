import React from "react";
import styled from 'styled-components';
import Sidebar from "./components/sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";

const App = () => {

  return (
    <AppContainer >
      <AppGlass>
        <Sidebar />
        <MainDash />
        <RightSide />
      </AppGlass>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  background: linear-gradient(
    106.37deg,
    #ffe1bc 29.63%,
    #ffcfd1 51.55%,
    #f3c6f1 90.85%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppGlass = styled.div`
  display: grid;
  height: 97%;
  width: 97%;
  border-radius: 2rem;
  background-color: var(--glass);
  overflow: hidden;
  grid-template-columns: 11rem auto 20rem;
  gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: 10% 50% auto;
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`