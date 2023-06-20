import React from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Alertmessge = ({message,open,handleClose,level}) =>  {



  return (
    <div style={{color:"black"}}>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
         <DialogActions>
          <Button style={{marginBottom:"0px",marginTop:"0px",padding:"2px 0px 4px 0px"}} onClick={handleClose}>
            <CloseIcon/>
          </Button>
        </DialogActions>
        <DialogTitle style={{fontSize:"17px",padding:"0px 23px"}}>{message}: <span style={{color:"#1976d2",fontSize:"20px"}}>{level}</span></DialogTitle>
        <DialogContent>
        see your score on Dashboard
        </DialogContent>
       
      </Dialog>
    </div>
  );
}

export default Alertmessge;