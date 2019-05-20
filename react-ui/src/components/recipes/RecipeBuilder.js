import React, {Component} from 'react';
import {Form, FormControl, Container, Button} from 'react-bootstrap';
import Recipe from './Recipe';
export default class RecipeBuilder extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            recipeIndex:0,
            recipes:[],
        }
    }

    handleChange = () => {

    }
    
    onSubmit = (e) => {
        e.preventDefault();
        //e.target//((e) => {console.log(e.value)});
        const data = new FormData(e.target);
        for (var value of data.values()) {
            console.log(value); 
         }
    }

    render() {
        return(
        <Container style={{color:'white'}}>
        <h1>RecipeBuilder</h1>
        <Form onSubmit={this.onSubmit}>
            <RecipeMetaDataBuilder/>
            <IngredientListDataBuilder/>
            <RecipeStepDataBuilder/>
            <Button type="submit">Submit</Button>
        </Form>
        {this.state.recipes.map((recipe) => {
            return(
                <Recipe
                recipeMetaData={recipe.recipeMetaData}
                servings={recipe.servings}
                ingredientListData={recipe.ingredientListData}
                recipeStepData={recipe.recipeStepData}
                />
            )
        })}
        </Container>);
    }
}

class RecipeMetaDataBuilder extends Component {
    render(){
        return(<>
        <h4>Recipe Meta Data Builder</h4>
        <Form.Control 
            type="text" 
            placeholder="Title" 
            name="title"
            required />
        <Form.Control 
            type="text" 
            placeholder="Author" 
            name="author"
            required />
        <Form.Control 
            type="text" 
            placeholder="Time" 
            name='time'
            required />
        <Form.Control 
            type="text" 
            placeholder="Tag" 
            name='tag'
            required />
        </>);
    }
}

class IngredientListDataBuilder extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            ingredientsToEdit:1,
        }
    }

    onClickAddIngredient = (e) => {
        e.preventDefault();
        this.setState({ingredientsToEdit: this.state.ingredientsToEdit + 1});
    }

    onClickRemoveIngredient = (e) => {
        e.preventDefault();
        this.setState({ingredientsToEdit: this.state.ingredientsToEdit - 1});
    }

    render(){

        let ingredients = [];
        for (let i = 0; i < this.state.ingredientsToEdit; i++)
        {
            ingredients.push(<Form.Control 
                type="text" 
                placeholder="Ingredient" 
                name={"ingredient" + i}
                required />);
        }
        return(<>
        <h4>IngredientListDataBuilder</h4>
        <h5>Servings</h5>
        <Form.Control 
                type="number" 
                placeholder="Servings" 
                name='servings'
                required />
        <h5>Ingredients</h5>
        {ingredients}
        <Button onClick={this.onClickAddIngredient}>Add</Button>
        <Button onClick={this.onClickRemoveIngredient}>Remove</Button>
        </>);
    }
}

class RecipeStepDataBuilder extends Component {
    render(){
        return(<h4>RecipeStepDataBuilder</h4>);
    }
}
