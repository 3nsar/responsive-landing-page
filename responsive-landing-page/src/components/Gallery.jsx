import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

const Gallery = () => {
    const [post, setPost] = useState([])
    const url = "https://dummyjson.com/products/"
    
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get(url)
            setPost(res.data.products)
            console.log(res.data)
        }
        fetchData()
    },[]);                                                                            

    return (
        <div className='gallery-container'>
            <h1>GALLERY</h1>
            <div className="gallery-content">
 
            {post.map((item) => (
                
                <Link  to={`/product/${item.id}`}>
                    <div key={item.id} >
                    <img src={item.images[0]} alt='pic'/>
                    
                </div>
                </Link>
               
            ))}
            </div>
        </div>
    )
}

export default Gallery
