import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
class RecipeMetaData extends Component {
    
    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            author:'',
            time:'',
        }
    }

    componentWillMount()
    {
        this.setState({
            title:this.props.metaData.title,
            author:this.props.metaData.author,
            time:this.props.metaData.time,
        })
    }
    render()
    {
        return(
        <Container>
            <h1>{this.state.title}</h1>
            <h2>{this.state.author}</h2>
            <h3>{this.state.time}</h3>
        </Container>

        );
    }
}
export default RecipeMetaData;