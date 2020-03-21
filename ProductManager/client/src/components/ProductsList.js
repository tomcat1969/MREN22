import React from 'react'
import { Link } from '@reach/router';
export default props => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return (
                    <p key={idx}>
                     <Link to={"/products/" + product._id}>
                        {product.title}
                     </Link>
                    
                </p>
                )
                
            })}
        </div>
    )
}
