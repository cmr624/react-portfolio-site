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
            tags:[],
        }
    }

    componentWillMount()
    {
        this.setState({
            title:this.props.metaData.title,
            author:this.props.metaData.author,
            time:this.props.metaData.time,
            tags:this.props.metaData.tags,
        })
    }
    render()
    {
        return(
        <Container>
            <h1>{this.state.title}</h1>
            <h2>{this.state.author}</h2>
            <h3>{this.state.time}</h3>
            <h4>tags</h4>
            <ul>
                {this.state.tags.map((e) => {return <li>{e}</li>})}
            </ul>
        </Container>

        );
    }
}
export default RecipeMetaData;