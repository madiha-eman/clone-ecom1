import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useLocation } from "react-router-dom";

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    // const { id } = useParams();
    // console.log(useParams)

    useEffect(() =>{
        const getCategories = async () =>{
            const res = await axios.get('/api/category')
            // console.log(res.data)
            setCategories(res.data)
        }

        getCategories()
    },[callback])

    // useEffect(() =>{
    //     const getSingleCat = async () =>{
    //         const res = await axios.get('/api/category')
    //         console.log(res)
    //         // setCategories(res.data)
    //     }

    //     getSingleCat()
 
  
    // },[callback])

    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

export default CategoriesAPI
