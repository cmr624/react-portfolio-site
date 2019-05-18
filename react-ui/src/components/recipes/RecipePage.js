import React, { Component } from 'react';
import Recipe from './Recipe';
class RecipePage extends Component {
    render()
    {
        return(
        <React.Fragment>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
        </React.Fragment>

        );
    }
}
export default RecipePage;