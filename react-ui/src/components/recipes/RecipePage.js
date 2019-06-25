import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeBuilder from './RecipeBuilder';
import { Container } from 'react-bootstrap';
class RecipePage extends Component {
    
    constructor(props){
        super(props);
        this.state={
            recipeMetaData:{
                title:"apple recipe",
                author:"Carlos Michael",
                time:"4 hours",
                tags:['breakfast', 'dessert'],
            },
            servings:4,
            ingredientListData:[
                { number: 4, ingredient:'apples',},
                { number: 2, ingredient:'bananas',},
                { number: .33, ingredient:'tim apple',},
            ],
            recipeStepData:[
                "Wash the apple",
                "Cut the apple",
                "Eat the apple",
            ]
        }
    }
    render()
    {
        return(
        <Container>
            <Recipe
            recipeMetaData={this.state.recipeMetaData}
            servings={this.state.servings}
            ingredientListData={this.state.ingredientListData}
            recipeStepData={this.state.recipeStepData}
            />
            <RecipeBuilder/>
        </Container>

        );
    }
}
export default RecipePage;