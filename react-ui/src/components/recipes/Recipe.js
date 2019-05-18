import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import IngredientList from './IngredientList';
import RecipeSteps from './RecipeSteps';
import RecipeMetaData from './RecipeMetaData';
class Recipe extends Component {
    render()
    {
        return(
        <React.Fragment>
            <Container style={{color: 'white'}}>
                <RecipeMetaData/>
                <IngredientList/>
                <RecipeSteps/>
            </Container>
        </React.Fragment>
        );
    }
}
export default Recipe;