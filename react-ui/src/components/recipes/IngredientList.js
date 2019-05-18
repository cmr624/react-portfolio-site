import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

class IngredientList extends Component {
    constructor(props){
        super(props);
        this.state={
            servings:0,
            listData: [],
        };

    }
    setRatios = () => {
        this.state.listData.map((e) => {
            e.ratio = this.state.servings / e.number;
        });
    }

    calculateNewIngredientNumbers = () => {
        console.log("CALCULATING");
        this.state.listData.forEach((e) => {
            e.number = this.state.servings / e.ratio;
        });
        //wtf, this works. don't like this at ALLLLLL
        this.forceUpdate();
    }
    handleClick = () => {
        this.setState({servings: this.state.servings + 4}, this.calculateNewIngredientNumbers);
    }

    componentWillMount(){
        this.setState({listData: this.props.listData,servings:this.props.servings,}, this.setRatios);
    }

    render()
    {
        return(
        <Container>
            <Button onClick={this.handleClick}>{this.state.servings} servings</Button>
            <ul>
                {this.state.listData.map((e) => {
                    return(
                    <>
                    <li>{e.number} {e.ingredient}</li>
                    </>);
                })}
            </ul>
        </Container>

        );
    }
}
export default IngredientList;