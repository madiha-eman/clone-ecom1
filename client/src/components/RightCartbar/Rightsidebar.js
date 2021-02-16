import React, {useContext, useState} from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import {GlobalState} from '../../GlobalState'
import styled from 'styled-components';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
// import {CartReducer} from '../global/CartReducer';
// import { CartContext } from '../global/CartContext'
import CountUp from 'react-countup';
import { Cart } from './Cart';
import '../../css/Home.css'

// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide:{
      display:'none',
      webkitTapHighlightColor:'transparent', 
      marginTop: '50%',
      [theme.breakpoints.up('sm','xs')]: {     
        width:'20px',
        marginTop: '10%',
                                                
   }
  },
  hid: {
    // position:'fixed',
    // position:'sticky',
    // display: 'block',
    opacity: '.7',
    background:'#F5FCEB',
    background: 'linear-gradient(to bottom, #55584D 74%, whitesmoke 70%)',
    boxShadow: '0 0 16px -1px rgba(0,0,0,.75)',
    width:"65px",
    height:'76px',
    border:'none',
    transition: '.1s ease-in-out',
    marginTop: '50%',
    // display:'none',
  // '& hover':{
  //   opacity: '.9',
  //   boxShadow: '2px 0px 4px 2px lightgrey',
  //   background: 'linear-gradient(to bottom, #dcdcdc 70%, whitesmoke 70%)',

  // },
  [theme.breakpoints.up('sm','xs')]: {     
   
       marginTop:'10%'

  }
   
},
  cartclose:{
      border:'1px solid black',
      outline:'none',
      marginLeft:'160px',
      height:'30px',

  },
  
  cart1:{
      background: '#e4e0e1',
      height:'39px',
      paddingTop:'1.5px',
      paddingBottom:'1.5px',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
                                                         
      }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,


  },
  drawerPaper: {
    marginTop:'58.4px',
    background:'white',
    width: drawerWidth,
  },
  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 0),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-start',

      
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(0),
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  
  //   }),
  //   marginRight: -drawerWidth,
  // },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginrRight: 0,
  // },
}));

export default function Rightsidebar({product}) {
  const classes = useStyles();
  const state = useContext(GlobalState)
  const [cart] = state.userAPI.cart
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  // The ref you want to attach

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* {/* <AppBar */}
        {/* position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} */}
      {/* > */}
 
      <div style={{ position:'fixed', right: 0, marginTop:'20%',}} className={clsx(open && classes.hide)} className="bottom" anchor="right">
     
          <Button
            onClick={handleDrawerOpen}
            className={classes.hid}
            variant="permanent"
          >
             <span className='no-of-products'>{cart.length} ITEMS</span>
             <h5 className='price-of-products'> ৳ 
             <CountUp
            //  value={product.price * product.quantity}
              start={0}
              end={99}
              decimals={0} />
               </h5>
             
          </Button>
       
        </div>
     
       {/* </AppBar>  */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      {/* <div className={classes.drawerHeader} /> */}
      </main>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <div className={classes.drawerHeader}>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div> */}
        {/* <Divider /> */}
        <div className='cont'>
        <Grid direction='row' onClick={handleDrawerClose} position='fixed'  className={classes.cart1}>
        <Typography position='fixed'  varient='h3' onClick={handleDrawerClose} className={classes.cart1}>0 ITEMS
    <Button onClick={handleDrawerClose} className={classes.cartclose}>Close</Button>
    </Typography>
    </Grid>
    </div>
      <Cart/>
      </Drawer>
     </div>
  );
}
