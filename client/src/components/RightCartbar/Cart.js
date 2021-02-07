import React, { useContext, useEffect, useState } from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { CartContext } from '../global/CartContext'
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosClearhOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { cross } from 'react-icons-kit/entypo/cross'
import { smallDown } from 'react-icons-kit/entypo/smallDown'
import { smallUp } from 'react-icons-kit/entypo/smallUp'
import { iosCloseEmpty } from 'react-icons-kit/ionicons/iosCloseEmpty'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import Divider from '@material-ui/core/Divider';
// import { auth } from '../config/Config'
import Button from '@material-ui/core/Button';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
// import Modal from '@material-ui/core/Modal';
// import { StickyContainer, Sticky } from 'react-sticky';
// import StickyBox from "react-sticky-box";
import {circleUp} from 'react-icons-kit/icomoon/circleUp'
import {circleDown} from 'react-icons-kit/icomoon/circleDown'
// import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';


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
    hide: {
        display: 'none',

    },
    hid: {
        // position:'fixed',
        // position:'sticky',
        // display: 'block',
        background: 'linear-gradient(to bottom, #696969 70%, whitesmoke 70%)',
        boxShadow: '2px 2px 4px 2px grey',
        width: "100%",
        height: '100%',
        border: 'none',
    },
    '& hover': {
        boxShadow: '2px 0px 4px 2px lightgrey',
        background: 'linear-gradient(to bottom, #dcdcdc 70%, whitesmoke 70%)',

    },
    cartclose: {
        border: '1px solid black',
        outline: 'none',
        marginLeft: '160px',
        height: '30px',

    },
    
    cart1: {
        background: '#a9a9a9',
        paddingTop: '1.5px',
        paddingBottom: '1.5px'

    },
    input:{
        marginLeft: '-30px',
        padding: '4px',
        borderRadius: '6px',
        border:'none',
        outline:'none',
        background:'#EDEDED',
    }
    // drawer: {
    //   width: drawerWidth,
    //   flexShrink: 1,


    // },
    // drawerPaper: {
    //   marginTop:'58.4px',
    //   background:'white',
    //   width: drawerWidth,
    // },
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
export const Cart = ({ user }) => {

    // const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <>  
                <div style={{ right: 0, }} className={clsx(open && classes.hide)} anchor="right">
                <img src='' />
            </div>
                {/* {shoppingCart.length !== 0} */}
                <div className='cart-container'>
                    {/* {
                        shoppingCart.length === 0 && <> */}
                            <div style={{ marginLeft:'30px', marginTop:'50px',}} className={clsx(open && classes.hide)} anchor="right">
                                <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1704/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1' />
                                <h2 className='shopping-bag'>Your shopping bag is empty. Start shopping </h2>
                            </div>
                        
                    {/* // } */}
{/* 

                    /* {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div>
                                <Icon icon={smallUp} size={22} className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })} />

                                <div className='quantity'>{cart.qty}</div>

                                <Icon icon={smallDown} size={22} className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })} />
                            </div>
                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName} <br />
                                <span className='cart-price-orignal'>৳{cart.ProductPrice}</span>
                            </div> */}

                            {/* <div className='cart-price-orignal'> ৳ {cart.ProductPrice}</div> */}

                            {/* <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div> */}

                            {/* <div className='cart-price'>
                                ৳ {cart.TotalProductPrice}
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosCloseEmpty} size={24} />
                            </button>
                            <Divider />
                        </div>
                    ))
                    }  */}

                </div>
                  <footer className='foter'>
                <div className='sticky'>
                    <TreeView
                    style={{textAlign:'center', marginLeft:60,}}
                        className={classes.root}
                        defaultCollapseIcon={<Icon icon={circleDown}/>}
                        defaultExpandIcon={<Icon icon={circleUp}/>}
                    >
                        <TreeItem  nodeId="1" label="Have a special code?">
                            <input type='text' placeholder='Special Code' className={classes.input}/> <Button variant="contained" color="secondary">Go</Button> close

                       </TreeItem>
                    </TreeView>

                    </div>
              
                {/* {shoppingCart.length > 0 && */}

                <div className='cart-summary' position="fixed">
                          {/* <div style={{ marginLeft:'10px',}} className={clsx(open && classes.hide)} anchor="right">
                 <h2 className='shopping-bag'>Phone : 0188-1234567 </h2>
             </div> */}
                    {/* <StickyBox offsetTop={20} offsetBottom={20}> */}
                        {/* <div className='cart-summary-heading'>
                           
                        </div> */}
                        <div className='merge-btn'>
                            <Grid sm={12}>
                                {/* <Link to='cashout' className='cashout-link'> */}
                                <Button variant="contained" color="secondary" className='merge-btn1'>
                                    Place Order
                        </Button>
                                {/* </Link> */}
                                <Button variant="contained" color="secondary" className='merge-btn2'><span> ৳ </span>
                                </Button>
                            </Grid>
                            {/* <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div> */}
                        </div>
                    {/* </StickyBox> */}
                </div>

                </footer>
            </>

        </>
    )
}