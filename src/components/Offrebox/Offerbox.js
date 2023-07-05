import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./ofeerbox.css"
export default function AlertDialog({ open, handleClose, handleClickOpen }) {


    return (
        <div >
            <Button className='boxcolor' variant="outlined" onClick={handleClickOpen} >
                Chance To win 35000 Bonus coin
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Chance To win 35000 Bonus coins
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Participate in the game and Save your best score in
                        24 hours and win frist pool price
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}