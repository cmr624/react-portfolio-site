import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import IngredientList from './IngredientList';
import RecipeSteps from './RecipeSteps';
import RecipeMetaData from './RecipeMetaData';
class Recipe extends Component {

    constructor(props){
        super(props);
        //dummy data for testing purposes
        this.state={
            servings:4,
            ingredientListData:[
                { number: 4, ingredient:'apples',},
                { number: 2, ingredient:'bananas',},
                { number: .33, ingredient:'tim apple',},
            ],
            recipeMetaData:{
                title:"apple recipe",
                author:"Carlos Michael",
                time:"4 hours",
            },
            recipeStepData:[
                "Wash the apple",
                "Cut the apple",
                "Eat the apple",
            ]
        };

    }

    componentWillMount(){
        //TODO: make call from our database, set our state to the data!
    }
    render()
    {
        return(
        <React.Fragment>
            <Container style={{color: 'white'}}>
                <RecipeMetaData metaData={this.state.recipeMetaData}/>
                <IngredientList servings={this.state.servings} listData={this.state.ingredientListData}/>
                <RecipeSteps stepData={this.state.recipeStepData}/>
            </Container>
        </React.Fragment>
        );
    }
}
export default Recipe;