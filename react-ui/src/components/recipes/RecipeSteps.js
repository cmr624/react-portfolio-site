import React, { Component } from 'react';
class RecipeSteps extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            stepData:[],
        }
    }

    componentWillMount(){
        this.setState({stepData:this.props.stepData});
    }
    render()
    {
        return(<>
        <h4>RecipeSteps</h4>
        <ol>
            {this.state.stepData.map((e) => {
                return(<li>{e}</li>);
            })}
        </ol>
        </>);
    }
}
export default RecipeSteps;