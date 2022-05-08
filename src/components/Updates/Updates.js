import React from "react";
import styled from "styled-components";
import { UpdatesData } from '../Data/Data';

const Updates = () => {

  return (
    <UpdateContainer>
      {
        UpdatesData.map(item => (
          <UpdateContent key={item.name}>
            <Img src={item.img}/>  
            <Noti>
              <div style={{ marginBottom: '.5rem' }}>
                <span>{item.name}</span>
                <span>{item.noti}</span>
              </div>
              <span>{item.time}</span>
            </Noti>
          </UpdateContent>
        ))
      }
    </UpdateContainer>
  )
}

export default Updates;

const UpdateContainer = styled.div`
  width: 85%;
  background: #fff;
  border-radius: .7rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;
`

const UpdateContent = styled.div`
  display: flex;
  gap: .5rem;
`

const Img = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`
const Noti = styled.div`
  span:nth-child(1) {
    font-weight: bold;
  } 
`

const Time = styled.div`
  
`