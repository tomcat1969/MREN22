import React,{useContext, useState} from 'react'
import axios from 'axios';

export const PokemonApi = props => {
    const [data,setData] = useState({
        results:[]
    })
    
    
    const handlerOnClick = e => {
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
              }
              return response.json();
        }).then(response => {
            console.log(response);

            setData(
                {
                   results : response.results
                }
            )
            
        }).catch(err=>{
            console.log(err);
        });
    }
    

    return (<div>
        <button onClick={handlerOnClick}>fetch pokemon api</button>
        {
           data.results.map(({name,url},index) => {
               return (<p key={index}>{name}</p>)
           })
        }
    </div>)
}