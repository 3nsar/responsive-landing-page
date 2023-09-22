import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'


const Product = () => {

  const {id} = useParams()
  const url = `https://dummyjson.com/products/${id}`
  const[product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async ()=>{

      setLoading(true)
      const res = await axios.get(url)
      console.log(res.data)
      setProduct(res.data)
      setLoading(false)
      
    }
    
    fetchData()
   
  },[id]) 

  

  if(loading){
      return (
        <div className='loading-container'>LOADING....</div>
      )
   }else{
      return(
        <div className='product-container'>
        <div className="product-content">
        <img src={product.thumbnail} alt=" " />
          <p>{product.brand}</p>
          <p>{product.title}</p>
          <p>{product.price}$</p>
        </div>
        <div className="product-btns">
            <Link  to={`/product/${product.id - 1}`}><button>BACK</button></Link>
            <Link  to={`/product/${product.id + 1}`}><button>NEXT</button></Link>  
        </div>
      </div>
     ) 
   }
}

export default Product