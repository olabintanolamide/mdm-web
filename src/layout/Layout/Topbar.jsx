
import PropTypes from 'prop-types'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar,InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  marginRight: theme.spacing(2),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  [theme.breakpoints.up('md')]: {
      width: '240px', },
  },
}));

 function Topbar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position='fixed'
        sx={{ boxShadow:"inset 0px -1px 0px #E5E5EA",
          width: `calc(100% - 232px)`,
      height: "62px",   background:"white", 
      }}>
        <Toolbar>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"/>
          </Search>
          
        </Toolbar>
      </AppBar>
  
    </Box>
  );
}

Topbar.propTypes = {}
export default Topbar

