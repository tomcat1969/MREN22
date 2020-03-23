import React from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';
export default () => {
    
    
   
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res=>{
               console.log(res.data)
            })
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/authors"}>Home</Link>
            <hr/>
           <AuthorForm onSubmitProp={createAuthor} initialName="" />
           
        </div>
    )
}
