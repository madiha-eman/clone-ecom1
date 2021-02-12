import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
// import ProductItem from '../utils/productItem/ProductItem'
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Typography } from "@material-ui/core";
// import  Signin from "./Signin";
import '../../../../css/Home.css'
// import SingleProduct from "./SingleProduct";
import {Col,ListGroup,Row } from 'react-bootstrap'
import DetailProduct from "../../detailProduct/DetailProduct";



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

const DetailsProduct = ({product, isAdmin, deleteProduct, handleCheck}
    ) => {
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

    if(detailProduct.length === 0) return null;

    return (
        <div>
            <button className='btn-hvr' onClick={handleOpen}>
              Details >
            </button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
               ghj,

                    
                {/* <div className="detail">
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
            </Modal>
        </div>
    );
}

export default DetailsProduct
