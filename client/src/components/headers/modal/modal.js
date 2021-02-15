import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert'
import { Icon } from 'react-icons-kit'
import {Link} from 'react-router-dom'
import {userPlus} from 'react-icons-kit/icomoon/userPlus'
import {ic_error} from 'react-icons-kit/md/ic_error'
import {ic_transform} from 'react-icons-kit/md/ic_transform'
import {ellipsisV} from 'react-icons-kit/fa/ellipsisV'
import axios from 'axios'
import './modal.css'



// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    background:'red',
    position: 'absolute',
    width: 230,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    outline:'none',
    boxShadow: theme.shadows[5],
  },
}));

export default function SimpleModal1() {
  const classes = useStyles();
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser = async () =>{
    await axios.get('/user/logout')
    
    localStorage.removeItem('firstLogin')
    
    window.location.href = "/";
}
const loggedRouter = () =>{
  return(
      <>
      <div>
      <li>Your Profile</li>
      <li className='li-1' ><Link to="/history" className='link1'>Payment History</Link></li>
        <li className='li-1'><Link to="/" onClick={logoutUser} className='link1'>Logout</Link></li> 
       
      </div>
        
          
      </>
  )
}

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className='dropdown'>
          <ul>
          <li className='first-child'> <Link to="/" className='link2'>{isAdmin ? 'Admin' : 'Chaldal 🥚 '}</Link></li>
         
          

         <div className="div-signin1">
          {/* {isAdmin && adminRouter()} */}

          {
             isLogged ? loggedRouter() :<Link className='link1' to="/login"><li><Icon icon={userPlus} className='icon1'/><span className="sign-child">Sign Up</span></li></Link>
                }
               
            </div>
            <div className='lang1'>
              <li>
                <Icon icon={ic_transform} />
             <span className='eng1'> Language </span>
             </li>
            </div>
         <div className="help1">
         {/* <IoIcons.IoMdHelpCircle  className={classes.markicon}/> */}
         <li>
           <Icon icon={ic_error}/>
         <span className='help-child'>Help & More</span>
         </li>
            </div>
          
         
       
            </ul>
        </div>
     
    </div>
   
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <Icon icon={ellipsisV} size={28} alt="" width="30" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
