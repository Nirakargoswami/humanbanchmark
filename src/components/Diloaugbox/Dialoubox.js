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
         
        </DialogActions>
        <DialogTitle style={{fontSize:"16px",padding:"5px 23px"}}>{message}: <span style={{color:"#1976d2",fontSize:"16px"}}>{level}</span></DialogTitle>
        <DialogContent>
        see your score on Dashboard
        </DialogContent>
        <Button style={{display:"flex",justifyContent:"end",marginRight:"7px"}} onClick={handleClose}>
            <CloseIcon/>
          </Button>
       
      </Dialog>
    </div>
  );
}

export default Alertmessge;