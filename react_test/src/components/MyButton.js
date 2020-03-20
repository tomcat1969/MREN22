import React from 'react'
import { render } from '@testing-library/react'


const Button = (props) => {
    return ( <button onClick={props.click}> {props.text}</button>)
   
    }
    



export const MyButton = () => {
   
    //const clickHandler = () => console.log("Clicked")

    return(
        <Button text={"my name is button"} click={()=>alert("hello")}/>
    )






}