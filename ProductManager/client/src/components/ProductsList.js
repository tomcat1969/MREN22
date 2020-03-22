
import { Link } from '@reach/router';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import DeleteButton from './DeleteButton'

export default props => {
   const [products,setProducts] = useState([])
   useEffect(() => {
       axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
   },[])

   const removeFromDom = productId => {
       console.log("id",productId)
       console.log(products[0]._id)
       console.log(productId == products[0]._id )
       setProducts([3,3,3])
       //setProducts(products.filter(product => product._id !== productId))
       //setPeople(people.filter(person => person._id != personId))
       console.log(products)
   }

    return (
        <div>
            {props.products.map((product, idx)=>{
                return (
                    <p key={idx}>
                     <Link to={"/products/" + product._id}>
                        {product.title}
                     </Link>
                     |
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
                )
                
            })}
        </div>
    )
}
