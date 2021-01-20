import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = (props) => {
    // transform object with key vaules into array[cheese,meat,bacon]
    // depedent of how many values for each index of value par create the arr 
    // for each value par of ingredient-value loop into ingredients component with value name and type
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return  <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    // join to only array of objects [{key : cheese},{ key : bacon}]
    .reduce((arr,el) => {
        return arr.concat(el)
    },[]);

    if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients !</p>
    }

    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;