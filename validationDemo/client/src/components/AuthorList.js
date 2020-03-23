import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(a => a._id !== authorId))
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {authors.map((author, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td >
                                            <Link to={"/" + author._id}>
                                                {author.name}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={"/authors/" + author._id + "/edit"}>
                                                Edit
                                            </Link> |
                                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                                        </td>
                                    </tr>
                                )
                            })}
            </table>
           
        </div>
    )
}
