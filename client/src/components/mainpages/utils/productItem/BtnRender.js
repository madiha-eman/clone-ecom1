import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../../../css/Home.css'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const [btn, setBtn] = useState('Add to Cart');
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const [cart, setCart] = state.userAPI.cart
    const addCart = state.userAPI.addCart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

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
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    <Link   className='addcart-btn' to="#!" onClick={() => addCart(product)}>
                    <div  onClick={()=>setBtn(
                        <div className='display-btn'>
               <div className='dec-1' onClick={() => decrement(product._id)} > - </div>
               <div className='add-bag'>in bag</div>
               <div  className='inc-1' onClick={() => increment(product._id)} >+</div>
               </div>
               )}> 
                                     {btn}

                          </div>


                    </Link>
                    {/* <Link id="btn_view" to={`/detail/${product._id}`}>
                        View
                    </Link> */}
                </>
            }
                
        </div>
    )
}

export default BtnRender
