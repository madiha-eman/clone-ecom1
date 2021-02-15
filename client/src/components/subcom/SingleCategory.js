import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

function SingleCategory() {
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
            {catProducts.map( (prod) => (
                <div>
                    {prod.title}
                    <img  src={prod.images.url}/>
                    
                </div>
            )

            )}

        </div>
    )
}

export default SingleCategory
