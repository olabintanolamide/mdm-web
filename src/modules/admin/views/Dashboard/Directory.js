import React from 'react'
import {InputBase, Box, Typography, TableCell, TableRow, TextField,InputAdornment} from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ReusableButton from '../../../../reusable/button';
import SearchIcon from '@mui/icons-material/Search';

const StyledBox = styled(Box)({ display: "flex",flexWrap:"wrap"});
const StyledTable = styled('Table')({minWidth: "100%",ariaLabel:"simple table"})
const StyledCard = styled("div")
  ({ textAlign: "center", marginTop: "100px" })
const Search = styled(InputBase) ({
    width: "264px", height: "32px", border: "1px solid #CDCED9",
  borderRadius: "2px", marginRight: "5px",
})

const Directory = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography>
          Directory
        </Typography>
        <StyledBox>
          <Search placeholder='Search'
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}>

          </Search>
        
          <Typography>Filter by: < ReusableButton />
          </Typography>
      </StyledBox>
         <StyledTable>
       
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Staff ID</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
              <TableCell align="right">Card Status</TableCell>
          </TableRow>
       </StyledTable>
       <StyledCard>
          <Typography>No Personel</Typography>
          <Typography>You currently do not have Registered <br /> User</Typography>
         <Link to=""> Add new </Link>
        </StyledCard>
      </Box>
    </React.Fragment>
  )
}

export default Directory