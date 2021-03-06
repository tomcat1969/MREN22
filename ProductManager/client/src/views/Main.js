
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

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product',product)
             .then(res => {
                 setProducts([...products,res.data])
             })
    }

    return (
        <div>
           <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
           <hr/><hr/>
           {loaded && <ProductsList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
