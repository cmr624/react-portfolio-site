import React, { Component } from 'react';
class RecipeSteps extends Component {
    render()
    {
        return(
        <React.Fragment>
            <ol>
                <li>
                    Wash the apple
                </li>
                <li>
                    really wash the apple
                </li>
                <li>
                    eat the apple
                </li>
            </ol>
        </React.Fragment>
        );
    }
}
export default RecipeSteps;