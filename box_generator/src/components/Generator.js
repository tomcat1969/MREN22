import React, { useState } from 'react';
import styles from './Generator.module.css'

export const Generator = () => {
        const [boxState,setBoxState] = useState({
            boxes : [],
            color:''
            
        })

const onSubmitHandler = event => {
    event.preventDefault();
    boxState.boxes.push(boxState.color)
    console.log(boxState)
    boxState.color = ''
    setBoxState({
        ...boxState
    }) 
    
}
const changeHandler = e => {
    e.preventDefault()
    boxState.color = e.target.value
    setBoxState({
        ...boxState,
        //  [e.target.name] : e.target.value
    })


}

const colorBoxes = boxState.boxes.map(item => <div className={styles.boxy} style={{background:item}}/>)

return(
            <div>
                <form onSubmit={onSubmitHandler}>
                    <p>color : <input type="text" name="color" onChange={changeHandler} value={boxState.color}/>
                    <p>length : <input type="number" name="length" onChange=</p></p>
                       <button >Add</button>
                    </p>
                </form>
                <p className={StyleSheet.boxy}>box goes to here</p>
                {colorBoxes}

            </div>
        )

}

// export default Generator