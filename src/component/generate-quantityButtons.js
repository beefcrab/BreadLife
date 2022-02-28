import React, {useState} from 'react';


function Quantity(props){
    const active = ""
    const setNumberButtons =  props.quantity.map((i) => (      
        <button 
            className ={props.id == i ? "button-loaf button-loaf-active" : "button-loaf"}
            value={i}
            key={i} 
            onClick={(e) => props.onClick(i, e.target.value)}
        >
            {i}
        </button> 
    ))

    return(
        <div>
            <button className="button-hash">#</button>
            {setNumberButtons}
        </div>
    )
}


export default Quantity