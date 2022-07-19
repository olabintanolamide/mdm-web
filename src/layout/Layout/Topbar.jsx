import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@mui/material'


const Topbar = props => {
  return (
    <div>
        <AppBar position='fixed' sx={{ width: `calc(100% - 240px)`, marginLeft: "240px"}}>
            <Toolbar><div>testing microphone</div></Toolbar>
        </AppBar>
    </div>
  )
}

Topbar.propTypes = {}

export default Topbar