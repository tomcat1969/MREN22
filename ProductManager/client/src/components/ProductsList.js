import React from 'react'

export default props => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}><a href="/api/products/{product._id}">{product.title}</a></p>
            })}
        </div>
    )
}
