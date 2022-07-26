import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Card, Typography, List, ListItemText, Box } from '@mui/material'
import { Link } from "react-router-dom";
import { ReactComponent as WorkBenchIcon } from "../../assets/svg/workbench.svg";
import { ReactComponent as DirectoryIcon } from "../../assets/svg/directory.svg";
    import { ReactComponent as SettingsIcon} from "../../assets/svg/settings.svg";
const Sidebar = props => {
  return (
    <Drawer variant='persistent' anchor='left' open
        sx={{
            width: 250,
            "& .MuiDrawer-paper" : {
          width: "232px"
        },
      }} >
      
     <Card elevation={0} sx={{
        height: "62px",  background:"white", boxShadow:"inset 0px -1px 0px #E5E5EA", borderRadius:0}}>
        <Typography variant='h6' component="p" sx={{ ml:5, mt:2, color:" #0050C8" }}   >
          Logo
       </Typography>
      </Card>
      <Box sx={{ml:2}}>
        <List>
        <ListItemText>  <Link to=""><WorkBenchIcon /> Workbench  </Link></ListItemText>
            <ListItemText>  <Link to="directory"> <DirectoryIcon/> Directory </Link></ListItemText>
        </List>
        <Box sx={{mt:35}}>
          <Typography>
            Your Account
          </Typography>
          
          <List>
            <ListItemText>  <Link to=""> <SettingsIcon />Settings </Link></ListItemText>
            <ListItemText>  <Link to=""> Help & Support </Link></ListItemText>
             <ListItemText>  <Link to=""> Log Out</Link></ListItemText>
        </List>
         
        </Box>
      </Box>
   
    
        
     
       

 
    
    </Drawer>
  )
}

Sidebar.propTypes = {}

export default Sidebar