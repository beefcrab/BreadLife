import React, {useState} from "react"
import data from "./data/recipes"

const Context = React.createContext()

function ContextProvider({children}) {
    const [recipeList, setRecipeList] = useState(data)
    const [renderRecipe, setRenderRecipe] =useState(0)

    function setRecipe(id=0){
        //console.log("from context ", id)
        setRenderRecipe(id)
    }

    return (
        <Context.Provider value={{recipeList,renderRecipe,setRecipe, setRenderRecipe}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}