import React from "react";
import styled from 'styled-components';
import Updates from "../Updates/Updates";
import CustomerReview from "../CustomerReview/CustomerReview";

const RightSide = () => {

  return (
    <RightSideContainer>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </RightSideContainer>
  )
}

export default RightSide;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0; 

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`