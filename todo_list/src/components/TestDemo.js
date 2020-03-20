import React, { useState } from 'react';

export const Parent = (props) => {
    const [state,setState] = useState({
        text:"initial value"
    })

    const clikHandler = e => {
       handleChange('button is clicked')
    }

    const handleChange = value => {
        setState({
            text:value
        })
    }
    return (
        <div>
            This is parent:
            <Child text={state.text} showInput={true} handleChange={handleChange}/>
            <Child text={state.text} showInput={false} handleChange={handleChange}/>
            <button onClick={clikHandler}>click me</button>

        </div>
    )
}

const Child = (props) => {
    return (
        <GrandChild text={props.text} showInput={props.showInput} handleChange={props.handleChange}/>
    )
}


const GrandChild = (props) => {
    const onChange = e => {
        props.handleChange(e.target.value)
    }

    return (
        <div>
            <div >{props.text}</div>
           {props.showInput ? <input type="text" onChange={onChange}/> : null}
        </div>
        
       
    )
}