import React from 'react'
import PropTypes from 'prop-types'
import { Drawer } from '@mui/material'

const Sidebar = props => {
  return (
    <Drawer variant='persistent' anchor='left' open
        sx={{
            width: 240,
            "& .MuiDrawer-paper" : {
                width: 240
            }
        }}
    >
        <div>
            testing the drawer microphone 
        </div>

    </Drawer>
  )
}

Sidebar.propTypes = {}

export default Sidebar