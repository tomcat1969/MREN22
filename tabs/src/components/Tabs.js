import React, { useState } from 'react';

export const Tabs = props => {
    const [state,setState] = useState({
        tabs:[
            {title:"1",content: "11111111"},
            {title:"2",content: "222222222"},
            {title:"3",content: "333333333"},
            {title:"4",content: "444444444"},
            {title:"5",content: "555555555"}
        ],
        content:""
       

    })
    
    const handlerOnClick = (e,index) => {
       
        
         //alert(state.tabs[index].content)
         //alert(state.tabs[index].content)
         
         
         setState({
             ...state,
             content: state.tabs[index].content
         })
        //  tate.tabs[index].content
         
    }


    return (
        <div>
            {state.tabs.map(
                ({title,content},index) => 
                       <button key={index} onClick={(e)=> {handlerOnClick(e,index)}}>{title}</button>
                )}
            {state.content}    
        </div>
    )


}
    
   
               
    
   
