import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Api() {
    const [products, setProducts] = useState([])
    const fetchDatas = () => {
        // fetch('https://dummyjson.com/products').then(res => res.json()).then(result => setProducts(result))
        axios.get('https://fakestoreapi.com/products/').then(res => setProducts(res.data))
        // axios.get('https://dummyjson.com/products/').then(res => setProducts(res.data.products))
    }

    useEffect(() => {
        fetchDatas()
    }, products)

    console.log(products);
    return (
        <>
            {products.length < 1 ? 'Loading Products' : <div className='row'>
                {products.map((product) => {
                    return (
                        <>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <a href="#" className="btn btn-primary" >
                                        Add to Cart
                                    </a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>}
        </>
    )
}

export default Api
