import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';

const Appbar = () => {
    const drawerWidth = 240;
  return (
    <AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
>
    <Toolbar>
        <Typography variant="h6" noWrap component="div">
            Permanent drawer
        </Typography>
    </Toolbar>
</AppBar>
  )
}

export default Appbar









