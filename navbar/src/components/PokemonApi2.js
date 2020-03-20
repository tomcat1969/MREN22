import React,{useContext, useState,useEffect} from 'react'
import axios from 'axios'

export const PokemonApi2 = props => {
    const [state,setState] = useState("")
    axios.get("https://pokeapi.co/api/v2/pokemon")
                    .then(response => {
                        setState(response.data.results[0].name)
                       
                    })
                    .catch(err => console.log(err))
    
    return(
        <h3> {state}</h3>
       
    )

}
