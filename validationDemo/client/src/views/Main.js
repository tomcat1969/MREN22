
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

import AuthorList from '../components/AuthorList';
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{ 
                setAuthors(res.data)
                setLoaded(true);

            });
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(a => a._id !== authorId));
    }
   
    return (
        <div>
           <h1>Favorite authors</h1>
            <Link to={"/author"}>Add an author</Link>
            <hr/>
           
           {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}
