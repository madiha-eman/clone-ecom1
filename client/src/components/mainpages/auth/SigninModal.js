import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Typography } from "@material-ui/core";
import  Signin from "./Signin";
import { FaBorderNone } from "react-icons/fa";


// function rand() {
//     return Math.round(Math.random() * 0) - 0;
// }

function getModalStyle() {
    const top = 50
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 420,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        outline:'none',
        padding: theme.spacing(3, 3, 6),
    },
    title4:{
        display: 'none',
        color:'whitesmoke',
        paddingTop: '16px',
        fontSize: '16px',
        cursor: 'pointer',
        taxtAlign:'center',
        fontWeight: 'bold',
        [theme.breakpoints.up('sm','md')]: {
          display: 'block',
                                                           
        },
      },
                                    
}));

export default function SigninModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography className={classes.title4}  onClick={handleOpen}>
                Sign in
            </Typography>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Login</h2>
                   <Signin/>
                </div>
            </Modal>
        </div>
    );
}