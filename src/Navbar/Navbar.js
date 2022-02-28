import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMinus, faSortDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

import "./Navbar.css";

import {Context} from "../Context"

function Navbar(){

    const {recipeList, setRecipe} = useContext(Context);
    
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    function closeMobileMenuTest(e){
        setClick(false)
        console.log(e.target.value)
        setRecipe(e.target.value)

    }

    const [recipes, setRecipeList] = useState(recipeList.data)

    const generateLinks = recipes.map((list, i) => (

        <Link exact to="/BreadLife/recipe" key={i}>
            <li className="option"  value={list.id}  onClick={(e) =>closeMobileMenuTest(e)}>
                {list.flavour}
            </li>
        </Link>

    ))
  
  return (
    <div className="header">
        <Link to="/BreadLife/home">
        <div className="logo-nav">
            <div className="logo-container">
                <h4 className="header-title">
                BREAD 
                </h4>
            </div>
        </div>
        </Link>
        <div className="dropdown-header">
            <button className="mobile-menu" onClick={handleClick}>
                <p>RECIPES {
                    click ?
                    <FontAwesomeIcon className="fa-minus" icon={faMinus} /> :
                    <FontAwesomeIcon className="fa-dropDdown" icon={faSortDown} /> 
                    
                    }</p>
            </button>
            <ul className={click ? "nav-options active" : "nav-options"}>
 
                {generateLinks}
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
