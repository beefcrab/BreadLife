import React, {useState} from 'react';

function GenerateRecipe({recipe, loaves, conponent}){

    const ingredietsDisplay = recipe.map((oldrecipe, i) => (
        <li key={i} >{recipe[i].ingred}  <b>({recipe[i].weight * loaves + " g"})</b> </li>
    )) 

    return(
        <div className="ingred-container">
            <ul className="labels">
                {ingredietsDisplay}
            </ul> 
        </div>
    )
}

export default GenerateRecipe