import React, {useState, useContext, useEffect} from 'react';
import "./home.css"
import {Link} from "react-router-dom"
import {Context} from "../Context"


function HomePage(){
    const {renderRecipe, setRenderRecipe, recipeList} = useContext(Context)
    
    function test(e){
        setRenderRecipe(e.target.id)
    }

    // console.log(recipeList.data)

    const generatePhotos = recipeList.data.map((list, i) => (
       //console.log(list.flavour, list.id),
       <Link exact to="/recipe" >
            <div className="photo" id={list.id} onClick={(e) => test(e)}>
                <img className="img-container"
                    id={list.id}
                    src={list.photoUrl}>
                </img>
                <div class="centered" id={list.id}>
                    <h3 id={list.id}>{list.flavour}</h3>
                </div>
            </div>
        </Link>

    ))

    return(
        <div className="container-home">
            <div className="container-photo">
                {generatePhotos}
            </div>
        </div>
    )
}

export default HomePage