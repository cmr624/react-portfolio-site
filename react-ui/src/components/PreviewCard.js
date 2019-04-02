import React, { Component } from 'react';
import {Card, Button, Container} from "react-bootstrap";
class PreviewCard extends Component {

    constructor(props)
    {
        super(props);
        this.toIcon = this.toIcon.bind(this);
    }
    toIcon = (element, i) =>
    {
        return(
            <h1>hey</h1>
        )
        
    }
    
    render() {
        return (
            <div style={{padding: "20px", textAlign:"center", margin: "auto"}}>
            <Card className="mx-auto" style={{ maxWidth: '18em', minWidth: '14em', margin: "auto"}}>
                <Container style={{display: "block", height:"15em", padding: "10px"}}>
                    <Card.Img variant="top" style={{width: "100%", display: "block"}} src={"/images/previews/" + this.props.imgLink }/>
                </Container>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    {this.props.blurb}                    
                    </Card.Text>
                    <Button variant="primary" href={this.props.linkRel}>More Details</Button>
                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default PreviewCard;

/*
{this.props.skills.map(this.toIcon)}
*/