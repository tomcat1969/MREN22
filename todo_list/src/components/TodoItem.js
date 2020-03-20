import React, { useState } from 'react';

// class TodoItem extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { done: false };
//       this.onClick = this.onClick.bind(this);
//     }
//     onClick() {
//       this.setState(prevState => ({ done: !prevState.done }));
//     }
//     render() {
//       const textStyle = { 'textDecoration': this.state.done ? 'line-through' : 'none' };
//       return (
//         <div>
//           <button className="done-btn" onClick={this.onClick}>
//             {this.state.done ? 'Undo' : 'Done'}
//           </button>
//           <span className="todo-label" style={textStyle}>
//            Hello World!
//         </span>
//         </div>
//       );
//     }
//    }
//    ReactDOM.render(<TodoItem />, document.getElementById('root'));
//    export default TodoItem

export const TodoItem = props => {
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

    return (
        <div>
            <button className="done-btn" onClick={ClickHandler}>
                    {itemState.done ? 'Undo' : 'Done'}
                   </button>
                   <span className="todo-label" style={textStyle}>
                    Hello World!
                 </span>      
        </div>
    )
}