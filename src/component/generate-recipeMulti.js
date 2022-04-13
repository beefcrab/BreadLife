import React, {useState} from 'react';

function GenerateRecipe({recipe, loaves}){
    let conList = []

    recipe.map((rec, i) => (
        conList.indexOf(rec.con) === -1 ?
        conList.push(rec.con) :
        console.log("alread in")
    ))

    //console.log(conList)

    const display = conList.map((conpon, i)=>( 
        <p>
        <h4>{conpon}</h4>
        {
            recipe.map((rec, y)=>(
                rec.con == conpon ? 
                // <p>{rec.ingred}</p>
                <li>{rec.ingred} <b>{rec.weight * loaves + "g"}</b></li>
                :
                console.log("not match")
            ))
        }
        </p>
    ))


    return(
        <div className="ingred-container">
            {/* if recipe has multi conpoents render it differently */}
            <ul className="labels">
                {display}
            </ul> 
        </div>
    )
}

export default GenerateRecipe