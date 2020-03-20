import React,{useState} from 'react'


const StatefulComponent = props => {
    const [state,setState] = useState({
        clickCount:0
    })

    const clickHandler = e => {
        console.log(state)
        console.log("setState",setState)
        setState({
            clickCount: state.clickCount + 1
        })
        
    }

    return (
        <div>
            <button onClick={clickHandler}> You have clicked the button {state.clickCount} times</button>
        </div>
    )
}
export default StatefulComponent