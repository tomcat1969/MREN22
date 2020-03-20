import React from 'react';
// const MyComponent = props => {
//     const onClickHandler = e => {
//         alert("You have clicked the button");
//     }
 
//     return props.movies.map((item, index) => {
//         return <button onClick={onClickHandler}>{item}</button>
//     });
// }

export const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }
 
    return props.movies.map((item, index)=>{
        return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>
    });
}

