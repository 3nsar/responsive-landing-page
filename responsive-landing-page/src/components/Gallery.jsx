import React, { useEffect, useState } from 'react'
import axios from "axios"

const Gallery = () => {
    const [post, setPost] = useState([])
    const url = "https://dummyjson.com/products/"
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(url)
                setPost(res.data.products) // Assuming "products" is the array you want to map
                console.log(res.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchPost()
    }, [url])

    return (
        <div className='gallery-container'>
            <h1>GALLERY</h1>
            {post.map((item) => (
                <div key={item.id}>
                    <img src={item.images[0]} alt='pic'/>
                </div>
            ))}
        </div>
    )
}

export default Gallery
