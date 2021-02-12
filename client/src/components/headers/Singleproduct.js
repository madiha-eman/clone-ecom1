import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
// import ProductItem from '../utils/productItem/ProductItem'
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Icon } from 'react-icons-kit'
import {ellipsisV} from 'react-icons-kit/fa/ellipsisV'

import { Typography } from "@material-ui/core";
// import  Signin from "./Signin";
import '../../css/Home.css'
// import SingleProduct from "./SingleProduct";
import {Col,ListGroup,Row } from 'react-bootstrap'
// import './modal.css'



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
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    outline:'none',
    boxShadow: theme.shadows[5],
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

export default function Singleproduct() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return [params.id, products];

  // getModalStyle is not a pure function, we roll the style only on the first render



  const body = (

        <div style={modalStyle} className={classes.paper}>
       ghj,

            
         <div className="detail">
        <img src={detailProduct.images.url} alt="" />
         <div className="box-detail">
            <div className="row">
                <h2>{detailProduct.title}</h2>
                <h6>#id: {detailProduct.product_id}</h6>
            </div>
            <span>$ {detailProduct.price}</span>
            <p>{detailProduct.description}</p>
            <p>{detailProduct.content}</p>
            <p>Sold: {detailProduct.sold}</p>
            <Link to="/cart" className="cart"
            onClick={() => addCart(detailProduct)}>
                Buy Now
            </Link>
        </div>
    </div>

    <div> 
        
     </div>

  
           {/* <SingleProduct/> */}
        </div> 
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <Icon icon={ellipsisV} size={28} alt="" width="30" />
hjwekjrvgbegggggggvtrgweuiygryiweyg
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
