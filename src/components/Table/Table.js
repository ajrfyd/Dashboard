import React from "react";
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (name, trackingId, date, status) => ({ name, trackingId, date, status })

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = status => {
  if(status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
    }
  } else if(status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red'
    }
  } else {
    return {
      background: '#59bfff',
      color: '#fff'
    }
  }
}

//! Component //
const BasicTable = () => {

  return (
    <BasicTableContainer>
      <h3>Recent Orders</h3>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align='left' >Tracking ID</TableCell>
              <TableCell align='left' >Date</TableCell>
              <TableCell align='left' >Status</TableCell>
              <TableCell align='left' ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: '#fff' }}>
            {
              rows.map(item => (
                <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>{item.name}</TableCell>
                  <TableCell align='left' >{item.trackingId}</TableCell>
                  <TableCell align='left' >{item.date}</TableCell>
                  <TableCell align='left' >
                    <span style={{ ...makeStyle(item.status), padding: '8px', borderRadius: '9px' } }>{item.status}</span>
                  </TableCell>
                  <TableCell align='left' style={{ color: '#00b5ff' }}>Details</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </BasicTableContainer>
  )
}

export default BasicTable;

const BasicTableContainer = styled.div`
  & > td, th {
    border: none !important;
  }

  .MuiTableRow-root > * {
    padding: 10px;
  }

  .MuiTableRow-root.MuiTableRow-head > * {
    font-weight: bold;
  }

  &:first-child {
    border-radius: 0.7rem;
  }

  @media screen and (max-width: 1200px) {
    width: 170%;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 23rem;
  }
`
