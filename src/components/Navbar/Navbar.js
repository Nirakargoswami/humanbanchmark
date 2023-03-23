import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AcUnitIcon from '@mui/icons-material/AcUnitOutlined';

const Navbar = () => {

    
    return (
        <div>
            <AppBar position="fixed" style={{color:"black",backgroundColor:"white"}}>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div>
                        <AcUnitIcon style={{ fontSize: "30px" }} />

                    </div>
                    <Typography style={{marginLeft:"10px",fontSize:"18px"}} variant="h6" color="inherit" component="div">
                        Brain BenchMark
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar