////Template for recipes
//populate data in recipes.js

import React, {useState, useContext, useEffect} from 'react';
import "./template.css"

//conponents
import GenerateRecipe from "../component/generate-recipe"
import Quantity from '../component/generate-quantityButtons';

//context
import {Context} from "../Context"

function Template(){
    //get from context
    const {recipeList, renderRecipe} = useContext(Context)

    const [recipe, setRecipe] = useState(recipeList.data[renderRecipe].recipe)
    const [click, setClick] = useState(false);
    const [breadFlavour, setBreadFlavour] = useState(0)
    const [flavourRecipes, setFlavourRecipes] = useState(recipeList.data[renderRecipe].inclusions)
    const inclusions = ""

    const [buttons, setButtons] = useState(recipeList.data[renderRecipe].quantity)
    const [loaves, setLoaves] = useState(recipeList.data[renderRecipe].quantity[1])

    function numLoaves(n=1, e){
        //console.log("number loaf",e)
        setLoaves(n)
        setClick(true)
    }

    const handleSelect=(e)=>{
        //console.log("handle this: ", e)
        setBreadFlavour(e)
    }

    //dropdown to pick your flavour  
    const flavourDropdown = flavourRecipes.map((breadType, i) =>(
        <option value={breadType.id} key={i}>
            {breadType.flavour}
        </option>
    ))

    //generates a dropdown if recipe has a flavour inclusion
    function selectFlav(){
        if(breadFlavour == 0){      
            //do nothing
        }else{
            const flavourArray = []
            flavourRecipes[breadFlavour].recipe.map((ingred, i) =>{
                flavourArray.push({
                    ingred: ingred.ingred,
                    weight: ingred.weight
                })
            })
            return(
                <GenerateRecipe 
                    recipe={flavourArray}
                    loaves={loaves}
                />

            )
        }
    }

    function renderFlavour(){
        if(flavourRecipes.length === 0){
            console.log("no inclusions")
        }else{
            console.log("else: ",flavourRecipes)
            return(
                <div class="dropdown">
                    <select name="flavour" class="button-loaf" onChange={(e) => handleSelect(e.target.value)}>
                        {flavourDropdown}
                    </select>
                </div>
            )
        }
    }

    useEffect(() => {
        //console.log("befre", recipe, flavourRecipes)
        setRecipe(recipeList.data[renderRecipe].recipe)
        setButtons(recipeList.data[renderRecipe].quantity)
        setLoaves(recipeList.data[renderRecipe].quantity[0])
        setFlavourRecipes(recipeList.data[renderRecipe].inclusions)
        //console.log("after", recipe, flavourRecipes)
    }, [renderRecipe])

    return(
        <div className="recipe-container">
            
            <div className="title"><h1>{recipeList.data[renderRecipe].flavour}</h1></div>
            <Quantity 
                    quantity={buttons}
                    onClick={numLoaves}
                    id={loaves}
                    active={click}
                />

            {
                flavourRecipes.length > 0 ?
                <div class="dropdown">
                    <select name="flavour" class="button-loaf" onChange={(e) => handleSelect(e.target.value)}>
                        {flavourDropdown}
                    </select>
                </div> :
                <p></p>
            }

            <div className="ingredients"><h3>INGREDIENTS</h3></div>

            <GenerateRecipe 
                recipe={recipe}
                loaves={loaves}
            />

            {
                flavourRecipes.length > 0 ?
                selectFlav() :
                <p></p>
            }
            

        </div>
        
    )
}

export default Template