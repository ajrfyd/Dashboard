import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from "framer-motion";
import CompactCard from "./CompactCard";
import ExpandedCard from "./ExpandedCard";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { title, color, barValue, value, png, series } = props;

  return (
    <AnimateSharedLayout>
      {
        expanded ? <ExpandedCard param={props} setExpanded={setExpanded}/> : <CompactCard param={props} setExpanded={setExpanded} />
      }
    </AnimateSharedLayout>
  )
}

export default Card;

const CardContainer = styled.div`
  
`