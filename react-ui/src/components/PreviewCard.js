import React, { Component } from 'react';
import {Card, Button, Container} from "react-bootstrap";
import {DiMongodb, DiJavascript1, DiNodejs} from "react-icons/di";
class PreviewCard extends Component {

    constructor(props)
    {
        super(props);
        this.toIcon = this.toIcon.bind(this);
    }
    toIcon = (element, i) =>
    {
        return(
            <DiMongodb></DiMongodb>
        )
        
    }
    
    render() {
        return (
            <Card className style={{ maxWidth: '18em'}}>
                <Container style={{display: "block", height:"15em"}}>
                    <Card.Img variant="top" style={{width: "100%", float: "center", paddingTop: "30px"}} src={"/images/previews/" + this.props.imgLink }/>
                </Container>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    {this.props.blurb}                    
                    </Card.Text>
                    <Button variant="primary" href={this.props.linkRel}>More Details</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default PreviewCard;

/*
{this.props.skills.map(this.toIcon)}
*/