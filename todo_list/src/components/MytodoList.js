import React, { useState } from 'react';



export const TodolistApp = props => {
    const [state,setState] = useState({
        todos : [
            {id:1,text:'item1'},
            {id:2,text:'item2'},
            {id:3,text:'item3'},
            {id:4,text:'item4'}
        ]
    })

    const handleDelete = index => {
        setState(
            (prevState) => {
                const todos = prevState.todos
                return {todos:[...todos.slice(0,index),...todos.slice(index + 1,todos.length)]}
            }
        )
    }

    const handleAdd = text => {
        setState(
            prevState => {
                return {
                    todos:[
                        ...prevState.todos,
                        {
                            id:new Date(),
                            text
                        }
                    ]
                }
            }
        )
    }

   

    
    return (
        <div>
            <MytodoList todos={state.todos} handleDelete={handleDelete}/>
            
            <UserInput handleAdd={handleAdd}/>
        </div>
    )
}





const MytodoList = props => {

    return (
        <div>
            {
                props.todos.map(({id,text},index)=><TodoItem key={id} 
                                                            text={text} 
                                                            index={index} 
                                                            handleDelete={props.handleDelete}/>)
            }

        </div>
    )



}

const UserInput = props => {
    const [state,setState] = useState({
        value:""
    })

    const handleAdd = e => {
        props.handleAdd(state.value)
    }
    const handleOnchange = e => {
        setState(
        {
            value:e.target.value
        }
        )
    }
    return (
        <div>
            <input type="text" onChange={handleOnchange}/>
            <button onClick={handleAdd}>add</button>

        </div>
    )
}

const TodoItem = props => {
    const [itemState,setItemState] = useState({
        done : false  
    })
    const ClickHandler = (e) => {
        itemState.done ? itemState.done = false : itemState.done = true
        setItemState({
            done: itemState.done
        })

    }

    const textStyle = { 'textDecoration': itemState.done ? 'line-through' : 'none' }

    const handleDelete = e => {
        props.handleDelete(props.index)
    }

    return (
        <div>
            <button className="done-btn" onClick={ClickHandler}>
                    {itemState.done ? 'Undo' : 'Done'}
                   </button>
                   <span className="todo-label" style={textStyle}>
                    {props.text}
                 </span>      
                 <button onClick={handleDelete}>X</button>
        </div>
    )
}