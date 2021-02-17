import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
// import clsx from 'clsx';
import { useParams } from "react-router-dom";
import {minus} from 'react-icons-kit/metrize/minus'
import {plus} from 'react-icons-kit/metrize/plus'
import {Link} from 'react-router-dom'
import BtnRender from '../mainpages/utils/productItem/BtnRender'
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from 'react-icons-kit'
import '../../css/Home.css'

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
function SingleCategory({product, isAdmin, deleteProduct, handleCheck}) {
    const [title, setTitle] = useState('Add to Shopping Bag');
    const classes = makeStyles();
    const { id } = useParams();

    var [catProducts, setCatProducts] = useState([]);

    useEffect(() =>{
            
            axios.get('http://localhost:5000/api/category/' +id)
            .then(res => {
                console.log(res.data)
                setCatProducts(res.data);
            })
            .catch((e) => console.log(e));

        }, [])

        console.log(catProducts)

    return (
        <div>
           <div className='products-container'>
            {catProducts.map( (prod) => (
              <div className='product-card'>
                <div className="product-hvr">
                    <div className='product-img'>
                    <img src={prod.images.url} alt="not found"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 5 }} />
                  </div>
                  <div className='product-name'>
                  <h2>{prod.title}</h2>
                  </div>
                  <div className='product-price'>
                    ৳ <span className='product-price1'> {prod.price}</span>
                  </div>
            
                  <div className='bag'>
                      <div  anchor="right">
                   </div>  
                   </div> 
                   <div class="middle" >
                    <div >
                    <div className='shopping-bag0'>
                    
                   <h2 className='shopping-bag' onClick={() => setTitle(<> 
           
                        <div className='p-bag0' >

             
                        <p className='p-bag' key={prod._id}> ৳ {prod.price * prod.quantity}
                          <div className='add-hvr'>
                             <Icon icon={minus} size={26} className='dec1' />
                                    <div className='quantity-bag'>{prod.quantity}</div>
                             <Icon icon={plus} size={26} className='inc1' /> 
                                 </div>
                                  </p> </div><span className='p2-bag'>in bag</span></>)}> <span>{title}</span> </h2>
                                  <div className='btn-hvr0'>
                    <button className='btn-hvr'>
                    <Link  to={`/detail/${prod._id}`}>
                    {/* <DetailsProduct /> */}
                    </Link>
                        </button>
                    </div>
                  </div>
                </div>
                </div> 
                </div>
                <BtnRender className='addcart-btn' product={product} deleteProduct={deleteProduct}/>
                 </div>

            )

            )}
                         </div>

</div>
    )
}

export default SingleCategory
