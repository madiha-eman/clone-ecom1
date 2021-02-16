import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import '../../../../css/Home.css'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const [btn, setBtn] = useState('Add to Cart');
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
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
                        {/* <div onClick={()=>setBtn(
                          <div  onClick={() => decrement(product._id)} > - </div>
                        )}>
                     <div onClick={() => increment(product._id)} >+</div>
                        </div> */}
                        {btn}
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
