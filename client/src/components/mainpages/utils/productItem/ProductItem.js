import React, { useContext, useState } from 'react'
import {GlobalState} from '../../../../GlobalState'
import clsx from 'clsx';
import axios from 'axios'
import { Icon } from 'react-icons-kit'
import { makeStyles } from '@material-ui/core/styles';
import '../../../../css/Home.css'
import BtnRender from './BtnRender'
import DetailsProduct from './DetailsProduct';
import {minus} from 'react-icons-kit/metrize/minus'
import {plus} from 'react-icons-kit/metrize/plus'
// import Typography from '@material-ui/core/Typography';
// import {arrows_circle_plus} from 'react-icons-kit/linea/arrows_circle_plus'
// import {arrows_circle_minus} from 'react-icons-kit/linea/arrows_circle_minus'

// import {Link} from 'react-router-dom'

// import Singleproduct from '../../../headers/Singleproduct';


const useStyles = makeStyles((theme) => ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    hide: {
      display: 'none',
  
    },
    content: {
      flexGrow: 8,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -10,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
    const [title, setTitle] = useState('Add to Shopping Bag');
    const classes = makeStyles(useStyles);

    const [open] = useState(false);
    // const handleDrawerOpen = () => {
    //   setOpen(!open);
    // };
  
    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const addCart = state.userAPI.addCart
    const [token] = state.token
    // const [total,setTotal] = useState(0)

  //   useEffect(() =>{
  //     const getTotal = () =>{
  //         const total = cart.reduce((prev, item) => {
  //             return prev + (item.price * item.quantity)
  //         },0)

  //         setTotal(total)
  //     }

  //     getTotal()

  // },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

 

 
    return (
        <div className='products-container'>
        <div className='product-card' key={product._id}>
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }     
                <div className="product-hvr">
                  <div className='product-img'>
                    <img src={product.images.url} alt="not found"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 5 }} />
                  </div>
                  <div className='product-name'>
                  <h2>{product.title}</h2>
                  </div>
                  <div className='product-price'>
                    ৳ <span className='product-price1'> {product.price}</span>
                  </div>
                  <div className='bag'>
                      <div className={clsx(open && classes.hide)} anchor="right">
                   </div>  
                   </div> 
                   <div class="middle" >
                    <div className={clsx(open && classes.hide)} onClick={() => addCart(product)}>
                    <div className='shopping-bag0'>
                    
                   <h2 className='shopping-bag' onClick={() => setTitle(<> 
           
                        <div className='p-bag0' >

             
                        <p className='p-bag' key={product._id}> ৳ {product.price}
                          <div className='add-hvr'>
                             <Icon icon={minus} size={26} className='dec1' onClick={() => decrement(product._id)} />
                                    <div className='quantity-bag'>1</div>
                             <Icon icon={plus} size={26} className='inc1' onClick={() => increment(product._id)} /> 
                                 </div>
                                  </p> </div><span className='p2-bag'>in bag</span></>)}> <span>{title}</span> </h2>
                
                 </div>
                
                    </div> 
                   <div className='btn-hvr0'>
                    <button className='btn-hvr'>
                    {/* <Link  to={`/detail/${product._id}`}> */}
                      <DetailsProduct product={product} id={product._id} isAdmin={isAdmin} 
                        deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    {/* </Link> */}
                        </button>
                    </div>
                  </div>
                </div>
                <BtnRender product={product} deleteProduct={deleteProduct} />
                {/* <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}><a>ADD TO CART</a></button> */}
              </div>
                       {/* <BtnRender product={product} deleteProduct={deleteProduct} /> */}

          </div>
          
//   </div>
//   </div>
    )
}

export default ProductItem
