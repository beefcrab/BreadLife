import React, {useState, useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import "./template.css"


import GenerateRecipe from "../component/generate-recipe"
import Quantity from '../component/generate-quantityButtons';


import {Context} from "../Context"

function Template(){
    const {recipeList, renderRecipe} = useContext(Context)

    const [recipe, setRecipe] = useState(recipeList.data[renderRecipe].recipe)
    const [click, setClick] = useState(false);
    const [breadFlavour, setBreadFlavour] = useState(0)
    const [flavourRecipes, setFlavourRecipes] = useState(recipeList.data[renderRecipe].inclusions)
    const inclusions = ""

    const [buttons, setButtons] = useState(recipeList.data[renderRecipe].quantity)
    const [loaves, setLoaves] = useState(recipeList.data[renderRecipe].quantity[1])

    function numLoaves(n=1, e){
        setLoaves(n)
        setClick(true)
    }

    const handleSelect=(e)=>{
        setBreadFlavour(e)
    }

    const flavourDropdown = flavourRecipes.map((breadType, i) =>(
        <option value={breadType.id} key={i}>
            {breadType.flavour}
        </option>
    ))

    function selectFlav(){
        if(breadFlavour == 0){      
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
        setRecipe(recipeList.data[renderRecipe].recipe)
        setButtons(recipeList.data[renderRecipe].quantity)
        setLoaves(recipeList.data[renderRecipe].quantity[0])
        setFlavourRecipes(recipeList.data[renderRecipe].inclusions)
    }, [renderRecipe])

    return(
        <div className="recipe-container">

            <div className="ingred-div">
            <div className="title"><h1>{recipeList.data[renderRecipe].flavour}</h1></div>

            <div className="button-OG">
                <a 
                    target="_blank" 
                    href={recipeList.data[renderRecipe].source}>
                        <FontAwesomeIcon className="fa-window" icon={faWindowMaximize} /> 
                        OG Recipe 
                       
                </a>
            </div>
                            

            </div>
            



            <br />

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