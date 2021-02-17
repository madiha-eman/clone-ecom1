import React, {useContext, useState} from 'react'
import './style.css'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
// import { Divider } from '@material-ui/core'
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
import FbIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import {iosPlusEmpty} from 'react-icons-kit/ionicons/iosPlusEmpty'
// import {socialFacebookOutline} from 'react-icons-kit/ionicons/socialFacebookOutline'
import { Icon } from 'react-icons-kit'
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../../MaterialUI";
// import TextField from '@material-ui/core/TextField';

// const CssTextField = withStyles({

//   root:{
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//   }
// })
const useStyles = makeStyles((theme) => ({
  button1: {
    margin: theme.spacing(1),
    height:56,
    width: 350,
    fontSize:'14px',
    textTransform: 'capitalize',
  },
  fb1:{
    textTransform: 'lowercase',
    marginInline:4,

  },
  fb2:{
    fontWeight:'bold',
    marginInline:3,
  },
  email1:{
      color:'grey',
  },

  email2:{
    
    fontWeight:'bold',
    marginInline:3,

  },
  number:{
    marginTop:30,
    fontSize:'13px',
    textAlign:'center',
    letterSpacing:'0.1px',
    color:'rgb(95, 93, 93)',
    wordSpacing:'.5px',
    marginBottom:30,
    marginInline:3,
  },
  // button3:{
  //   background:'#ee496a',
  //   margin: theme.spacing(1),
  //   height:56,
  //   width: 350,
  //   color: 'whitesmoke',

  // },
  text: {
    borderBottom: '2px solid grey',
    width:'340px',
    border:'none',
    fontSize:'16px',
    paddingBottom:8,
    outline: 'none',
    '& $focused': {
      borderBottom:'1px solid orange',
    },
  },
  focused: {},


}));

const Signin = () => {
  const classes = useStyles();
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  const [title, setTitle] = useState();

  const logoutUser = async () =>{
    await axios.get('/user/logout')
    
    localStorage.removeItem('firstLogin')
    
    window.location.href = "/";
}

const adminRouter = () =>{
    return(
        <>
                   <DropdownMenu
    menus={[

      { label: "Create Product", href: "/create_product", icon: null, isAdmin:adminRouter },
    ]}
  />
            <li><Link to="/create_product">Create Product</Link></li>
            <li><Link to="/category">Categories</Link></li>
        </>
    )
}

const loggedRouter = () =>{
    return(
        <>
           <DropdownMenu
    menu={<a className="fullName">user name</a>}
    menus={[
      { label: "My Profile", href: "", icon: null },
    
      {
        label: "History",
        href: `/history`,
        icon: null,
      },
     
      { label: "Logout", href: "", icon: null, onClick:logoutUser },
      // { label: "Create Product", href: "/create_product", icon: null, isAdmin:adminRouter },

  
  
    ]}
  />
        </>
    )
}
  return (
    <div>
      
      <Button    
        variant="contained"
        color="primary"
        size="large"
        className={classes.button1}
        startIcon={<FbIcon />}>
           Sign Up   <span className={classes.fb1}>or</span> Login <span className={classes.fb1}>with </span><span className={classes.fb2}>Facebook</span>
      </Button>
      <Button
       variant="outlined"
       outline="grey"
       size="large"
       className={classes.button1}
       startIcon={<EmailIcon style={{color:'orange',}} />}>
           <span className={classes.email1}>Login with </span> <span className={classes.email2}>
           {
                     isLogged ? loggedRouter() :<Link to="/login">{isAdmin ? 'Admin' :'Email' }</Link>
                }
             Email</span>
      </Button>
   <Typography className='h1'>
     or
   </Typography>
      <Typography className={classes.number} variant="h3" gutterBottom>
      PLEASE ENTER YOUR MOBILE PHONE NUMBER
      </Typography>
      <form className={classes.root} noValidate>
        <Icon   icon={iosPlusEmpty} size={22}/>
      <input
          id="filled-helperText"
          defaultValue="88"   
          className={classes.text}
        />
        </form>
      <Button
      variant="contained"
       size="large"
       className='button3'
      >
           SIGIN UP / LOGIN
      </Button>
    </div>
  )
}

export default Signin
