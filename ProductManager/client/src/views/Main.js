// import React, { useEffect, useState } from 'react';
// import ProductForm from '../components/ProductForm'
// export default () => {
//     return (
//         <div>
//            <ProductForm/>
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <ProductForm/>
           <hr/><hr/>
           {loaded && <ProductsList products={products}/>}
        </div>
    )
}
