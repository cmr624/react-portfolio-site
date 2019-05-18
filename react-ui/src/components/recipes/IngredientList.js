import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

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
    handleNumericInput = (e) => {
        const inputtedNum = parseInt(e.target.value);
        console.log(e.target.value);
        if (e.target.value !== "" && inputtedNum > 0)
        {
            this.setState({servings: inputtedNum}, this.calculateNewIngredientNumbers);
        }
    }

    componentWillMount(){
        this.setState({listData: this.props.listData,servings:this.props.servings,}, this.setRatios);
    }

    render()
    {
        return(
        <Container>
            <Form.Control 
            type="number" 
            value={this.state.servings} 
            onChange={this.handleNumericInput}
            style={{maxWidth:'100px'}}
                />
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