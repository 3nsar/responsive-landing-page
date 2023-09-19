import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
const Product = () => {

  const {id} = useParams()
  const url = `https://dummyjson.com/products/${id}`
  const[product, setProduct] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get(url)
      console.log(res.data)
      setProduct(res.data)
    }
    fetchData()
  },[])

  return (
    <div className='product-cotnainer'>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Product