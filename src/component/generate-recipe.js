import React, {useState} from 'react';

function GenerateRecipe({recipe, loaves}){
    //console.log("this is the array: ",recipe)

    const ingredietsDisplay = recipe.map((oldrecipe, i) => (
        // console.log("hello there", loaves),
        <li key={i} >{recipe[i].ingred}  <b>({recipe[i].weight * loaves + " g"})</b> </li>
    )) 

    return(
        <div className="ingred-container">
            <div className="row">
                {/* <div className="ingred-title"><b>Ingredients:</b></div> */}
                <ul className="labels">
                    {ingredietsDisplay}
                </ul>
            </div>
        </div>
    )
}

export default GenerateRecipe