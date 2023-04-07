import * as React from 'react';
import { useState ,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AcUnitIcon from '@mui/icons-material/AcUnitOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {onAuthStateChanged,Signout,auth}  from "../../Firebse/firebse"
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, userAuth => {
        if (userAuth) {
          // User is logged in
          setUser(userAuth);
        } else {
          // User is logged out
          setUser(null);
        }
      });
  
      return unsubscribe;
    }, []);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
const Logout = () => {
    Signout()
}
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //       setUser(user);
    //     })})
    

    return (
        <div>
            <AppBar position="fixed" style={{ color: "black", backgroundColor: "white" }}>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div>
                        <AcUnitIcon style={{ fontSize: "30px" }} />
                    </div>
                    <Link to={"/"} className="css-i4vpdl">
                        <div style={{ marginLeft: "10px", fontSize: "18px", color: "black" }} variant="h6" color="inherit" className='css-i4vpdl' component="div">
                            Brain BenchMark
                        </div>
                    </Link>
                    <Link to={"/dashboard"} className="css-i4vpdl">
                        <div style={{ marginLeft: "10px", fontSize: "18px", color: "black" }} variant="h6" color="inherit" className='css-i4vpdl' component="div">
                            Dashboard
                        </div>
                    </Link>

                    <div style={{ marginLeft: "auto" }}>
                        <IconButton
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <Link to={"/"} className="css-i4vpdl">
                                <MenuItem onClick={handleClose}>

                                    Home

                                </MenuItem>
                            </Link>
                            <Link to={"/dashboard"} className="css-i4vpdl">

                                <MenuItem onClick={handleClose}>
                                    Dashboard

                                </MenuItem>
                            </Link>
                           {user ?
                           <Link  className="css-i4vpdl">

                           <MenuItem onClick={() => Logout()}>
                               Logout
                           </MenuItem>
                       </Link> :
                           <Link to={"/login"} className="css-i4vpdl">
       
                                <MenuItem onClick={handleClose}>
                                    Login
                                </MenuItem>
                            </Link>
                            
                            }

                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
