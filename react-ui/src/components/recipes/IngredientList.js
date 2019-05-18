import React, { Component } from 'react';

class IngredientList extends Component {
    constructor(props){
        super(props);
        this.state={
            listData: [],
        };

    }
    
    componentWillMount(){
        this.setState({listData: this.props.listData});
    }

    render()
    {
        return(
        <React.Fragment>
            <ul>
                {this.state.listData.map((e) => {
                    return(
                    <>
                    <li>{e.number} {e.ingredient}</li>
                    </>);
                })}
            </ul>
        </React.Fragment>

        );
    }
}
export default IngredientList;