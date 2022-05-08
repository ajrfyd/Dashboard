import React from "react";
import styled from 'styled-components';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";


const CompactCard = ({ param, setExpanded }) => {
  const Png = param.png;

  return (
    <motion.div layoutId='expandableCard'>
      <CompactCardContainer 
        style = {{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow
        }}
        onClick={() => setExpanded(true)}
      >
        <RadialBar>
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>
            {param.title}
          </span>
        </RadialBar>
        <Detail>
          <Png />
          <span>${param.value}</span>
          <span>Last 24 hours</span>
        </Detail>
      </CompactCardContainer>
    </motion.div>
  )
}

export default CompactCard;

const CompactCardContainer = styled.div`
  display: flex;
  flex: 1;
  height: 7rem;
  border-radius: .7rem;
  color: #fff;
  position: relative;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    box-shadow: none!important;
  }
`

const RadialBar = styled.div`
  display: flex;  
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  .CircularProgressbar {
    width: 4rem !important;
    overflow: visible !important;
  }

  .CircularProgressbar-path {
    stroke: #fff!important;
    stroke-width: 12px!important;
    filter: drop-shadow(2px 4px 6px #fff);
  }
  
  .CircularProgressbar-trail {
    display: none;
  }
  .CircularProgressbar-text {
    fill: #fff;
  }
  span {
    font-size: 17px;
    font-weight: normal;
  }
`

const Detail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  span:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
  }

  span:nth-child(3) {
    font-size: 12px;
  }
`