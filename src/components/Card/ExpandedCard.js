import React from "react";
import styled from 'styled-components';
import { UilTimes } from '@iconscout/react-unicons';
// import Chart from "react-apexcharts";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";
import './ExpandedCard.css'


const ExpandedCard = ({ param, setExpanded }) => {
  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto'
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        let: 0,
        blur: 3,
        color: '#000',
        opacity: .35,
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient'
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#fff']
      },
      tooltip: {
        x: { format: 'dd/MM/yy HH:mm'},
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ]
      }
    }
  };

  return (
    <motion.div
      className='Expanded'
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
        
      }}
      layoutId='expandableCard'
    >
      <div
        style={{
          alignSelf: 'flex-end',
          cursor: 'pointer',
          color: '#fff'
        }}
      >
        <UilTimes 
          onClick={() => setExpanded(false)}
          
        />
      </div>
      <span
        style={{
          color: '#fff',
          fontSize: '26px',
          fontWeight: "bold",
          textShadow: '0px 0px 15px #fff'
        }}
      >
        {param.title}
      </span>
      <ChartContainer>
        <Chart 
          series={param.series} 
          type='area' 
          options={
            data.options
          }
        />
      </ChartContainer>
      <span
        style={{
          color: 'rgb(223, 222, 222)',
          fontSize: '16px'
        }}
      >
        Last 24 Hours
      </span>
    </motion.div>
  )
}

export default ExpandedCard;

const ExpandedCardContainer = styled.div`
  
`

const ChartContainer = styled.div`
  width: 70%;
`