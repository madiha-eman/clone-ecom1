import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import { iosCloseEmpty } from 'react-icons-kit/ionicons/iosCloseEmpty'
import { Icon } from 'react-icons-kit'
import './DetailProduct.css'
import {checkmark2} from 'react-icons-kit/icomoon/checkmark2'
// import ProductItem from '../utils/productItem/ProductItem'
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Grid, Typography } from "@material-ui/core";
// import  Signin from "./Signin";
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
        width: 720,
        outline:'none',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        // padding: theme.spacing(3, 3, 6),
    },
    title0:{
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

      root:{
        margin:0,
        padding:0,
      },
     title:{
       textTransform:'lowercase',
       fontSize: '8px',
       [theme.breakpoints.up('sm','md')]: {
        fontSize: '14px',
                                                         
      },
     },
     title3:{
      fontSize: '12px',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm','md')]: {
        fontSize: '18px',
                                                         
      },
    },
    title5:{
      fontSize: '10px',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm','md')]: {
        fontSize: '14px',
                                                         
      },
    },
    title4:{
      fontSize:'bold',
      fontSize: '10px',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm','md')]: {
        fontSize: '14px',
                                                         
      },
    },
    mintitle:{
      fontSize: '12px',
      fontWeight: 'none',
    },
    google:{
      width: '38px',
      height: '30px',
      marginLeft: 8,
      [theme.breakpoints.up('sm','md')]: {
        width: '70px',
        height: '34px',
        display:'flex',

                                                         
      },
    },
    social:{
      width:'25px',
      height:'30px',
      margin:2,
    
    },
    mainSocial:{
      textAlign:'center',
     
    },
    foot1:{
      // boxShadow:'10px 10px 10px 0 grey',
      paddingTop:10,
    },
    foot2:{
      marginTop:'20px',
    },
                                    
}));

const DetailsProduct = ({ id, product, isAdmin, deleteProduct, handleCheck }) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const params = useParams();
    const state = useContext(GlobalState);
    const [products] = state.productsAPI.products;
    const addCart = state.userAPI.addCart;
    const [detailProduct, setDetailProduct] = useState([]);
  
  //   const [detailImg, setDetailImg] = useState('');
    const [detailImgUrl, setDetailImgUrl] = useState('');
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
  //   useEffect(() => {
  //     if (params.id) {
  //       products.forEach((product) => {
  //         if (product._id === params.id) setDetailProduct(product);
  //       });
  //     }
  //   }, [params.id, products]);
  
  useEffect(() => {
      if (id) {
        products.forEach((product) => {
          if (product._id === id) {
              setDetailProduct(product);
              // setDetailImg(product.images)
              setDetailImgUrl(product.images.url)
          }
        });
      }
    }, [id, products]);
 
  //   console.log('>>>>>>>>', detailProduct['images']);
  //   console.log('>>>>>>>>', detailProduct.images);
  // console.log('>>>>>>>>', detailImg.url);
  
  
    // if(detailProduct.length === 0) return null;
  
    return (
      <div>
        <button className="btn-hvr" onClick={handleOpen}>
          Details >
        </button>
  
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
  
          <div style={modalStyle} className={classes.paper}>
            
            <div className="">
            <Grid container>
                <Grid item lg={6} md={6}>
                  <div className='de-img'>
                    <img className='img-1' src={detailImgUrl} alt="" />
                    </div>
                
                </Grid>
              <Grid item lg={6} md={6} direction='row'>
                <Grid>
                  <div className='detail-2'>
                <h2 className='de-title'>{detailProduct.title}</h2>
                <Icon className='close-icon' icon={iosCloseEmpty} size={28}  onClick={handleClose}/>
                </div>
                </Grid>
                <Grid>
                     <p className='de-price0'>
                     ৳
                     <span className='de-price' > {detailProduct.price}</span>
                     </p>
                </Grid>
                <Grid direction='column'>
                  <div className='detail-2'>
                  <div className='inc-dec-div'>
                    <span className='dec-3'>-</span>
                    <span className='quan'>0 <span className='quan-sub'>in bag</span></span>
                    <span className='inc-3'>+</span>
                    </div>
                    <button  className="buy-btn">  <Link
                    className='buybtn-link'
                 onClick={() => addCart(detailProduct)}
               >
                 Buy Now
               </Link></button>
                  </div>
          
                </Grid>
                <hr className='hr-line'/>
                <Grid>
                  <div>
                    <p className='war'>Warranty</p>
                  </div>
                  <p className='war1'> <Icon icon={checkmark2} className='check-icon'/> 100% Authentic</p>
                  <p className='war1'> <Icon icon={checkmark2} className='check-icon'/> 100% Authentic</p>
                  <p className='war1'> <Icon icon={checkmark2} className='check-icon'/> 100% Authentic</p>

                  </Grid>
              </Grid>
              </Grid>
              <div className='foot-1'>
              <footer className='foot-1'>
                
      <Grid className={classes.root} container>
        
       <Grid className={classes.foot1} container direction="row">
        
      <Grid item xs={12} sm={12} md={2}  >
      <Typography className={classes.title} variant="h4">
       Description
        </Typography>
       
        </Grid>
        <Grid  item xs={12} sm={12} xl={3} md={2}>
        <Typography className={classes.title} variant="h4">
          Specification
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} xl={2} md={2}>
        <Typography className={classes.title5} variant="h4">
        T&C
         </Typography>
         </Grid>

      <Grid item xs={12} sm={12} md={1} xl={1}>
      <Typography className={classes.title} variant="h4">
             Pay with
             </Typography>
             </Grid>
        <Grid item xs={12} sm={12} xl={3} md={4}>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/Amex.png?q=low&webp=1&alpha=1'  width='25px' height='25px' alt='icon1'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/mastercard.png?q=low&webp=1&alpha=1'  width='25px' height='25px' alt='icon2'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/VIsa.png?q=low&webp=1&alpha=1' width= '25px' height='25px' alt='icon3'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/bkash.png?v=1&q=low&webp=1&alpha=1' width= '25px' height='25px' alt='icon4'/>
        <img src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/COD.png?v=1&q=low&webp=1&alpha=1' width= '25px' height='25px' alt='icon5'/>
        </Grid>
        </Grid>
        </Grid>
        </footer>
        <Grid container>
          <Grid item md={8} xs={12}>
              <div className="box-detail">
                <div className="row">
                </div>
               
                <p>{detailProduct.description}</p>
                <p>{detailProduct.content}</p>
                <p>Sold: {detailProduct.sold}</p>
                {/* <Link
                 
                  className="cart"
                  onClick={() => addCart(detailProduct)}
                >
                  Buy Now
                </Link> */}
              </div>
              </Grid>
              <Grid item md={4} xs={12}>
                  <div className='detail-3'> 
      <img className={classes.google} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/google_play_store.png?q=low&webp=1&alpha=1' alt='play1'/>
      <img className={classes.google} src='https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1638/Default/components/shared/NewFooter/images/app_store.png?q=low&webp=1&alpha=1' alt='play-app'/> 
      </div>   
      <div className="detail-4">
      <Grid item xs={12} sm={12} xl={3} md={8}>

        <Typography className={classes.title3} >
           0188-1234567
           </Typography>
        </Grid>
        <Grid item xs={12} sm={12} xl={3} md={8}>
        <Typography className={classes.title4} >
        <span className={classes.mintitle}>or email:</span> support@chaldal.com
         </Typography>
         </Grid>
      </div>
              </Grid>
              </Grid>
            </div>
            <div></div>
            
            </div>
            
          </div>
        </Modal>
  
 
      </div>
    );
  };

export default DetailsProduct
