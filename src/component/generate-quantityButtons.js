import React, {useState} from 'react';
// import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';


function Quantity(props){
    //console.log("heli", props.id)
    const active = ""
    const setNumberButtons =  props.quantity.map((i) => (
        //if event value eqauls i, make it active        
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
            <button className="button-loaf">#</button>
            {setNumberButtons}
        </div>
    )
}


export default Quantity