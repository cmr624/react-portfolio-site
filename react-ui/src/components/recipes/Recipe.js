import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import IngredientList from './IngredientList';
import RecipeSteps from './RecipeSteps';
import RecipeMetaData from './RecipeMetaData';

export default class Recipe extends Component {
    componentWillMount(){
        //TODO: make call from our database, set our state to the data!
    }
    render()
    {
        return(
        <React.Fragment>
            <Container style={{color: 'white',}}>
                <RecipeMetaData metaData={this.props.recipeMetaData}/>
                <IngredientList servings={this.props.servings} listData={this.props.ingredientListData}/>
                <RecipeSteps stepData={this.props.recipeStepData}/>
            </Container>
        </React.Fragment>
        );
    }
}
