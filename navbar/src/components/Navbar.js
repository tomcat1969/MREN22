import React,{useContext, useState} from 'react'


const Context = React.createContext({
    name:'initial name'
})



export const Navbar = props => {
    const [state,setState] = useState("")



     const ctx = useContext(Context)
    // console.log(ctx.name)
    // ctx.name = "haugn"
    // console.log(ctx.name)

    const handlerOnChange = e => {
        ctx.name = e.target.value
        console.log(ctx.name)
        setState(ctx.name)
    }
 

    return (<div>
        <div>{ctx.name}</div>
        <input type="text" onChange={handlerOnChange}/>
    </div>)
}