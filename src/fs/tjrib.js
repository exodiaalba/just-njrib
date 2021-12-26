import React, { Component } from 'react'
import {Card,CardGroup,ListGroupItem} from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default class fake extends Component {
constructor(props) {
    super(props);
}
    render() {
        return (
            <div>
<CardGroup>
  <Card>
  <Card.Title>{this.props.name}</Card.Title>
    <Card.Img style={{height:"500px"}} src={this.props.Img} />
    <Card.Body>
     
      <Card.Text style={{color:"silver"}}>
      Geralt of Rivia, a mutant monster hunter, pursues his destiny in a chaotic world where humans often prove to be more vicious than beasts.
      </Card.Text>
      <ListGroupItem style={{color:"blue"}} >original serie egybest XD</ListGroupItem>
      <ListGroupItem style={{color:"red"}} >original serie Netflix</ListGroupItem>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="https://www.youtube.com/embed/ndl1W4ltcmg">click for more information</Card.Link>
  <br/>
    <Card.Link href="https://www.netflix.com/browse?jbv=80189685">click for see serie</Card.Link> 
    </Card.Footer>
  </Card>
  <br/>
  <br/>
  <Card>
  <Card.Title>{this.props.N}</Card.Title>
    <Card.Img style={{height:"500px"}} src={this.props.I} />
    <Card.Body>
      
      <Card.Text style={{color:"green"}}>
      While Alfred the Great defends his kingdom against the Viking invader, Uhtred, born Saxon, but raised as a Viking, seeks to reclaim his rightful rank.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ListGroupItem style={{color:"red"}} >original serie Netflix</ListGroupItem>
    <Card.Link href="https://www.youtube.com/watch?v=YX4eBLQuLLo">click for more information</Card.Link>
    <br/>
    <Card.Link href="https://www.netflix.com/search?q=the%20las&jbv=80074249">click for see serie</Card.Link> 
    </Card.Footer>
  </Card>
  <br/>
  <br/>
  <Card>
  <Card.Title>{this.props.L}</Card.Title>
    <Card.Img variant="top" src={this.props.P} />
    <Card.Body>
     
      <Card.Text>
      Eight thieves take hostages in the Royal House of the Mint of Spain, while a crime genius manipulates the police into carrying out his plan.
      </Card.Text>
      <ListGroupItem style={{color:"red"}} >original serie Netflix</ListGroupItem>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="https://www.youtube.com/watch?v=uwsmkWh0S5Y">click for more information</Card.Link>
    <br/>
    <Card.Link href="https://www.netflix.com/search?q=la%20casa&jbv=80192098">click for see serie</Card.Link> 
    </Card.Footer>
  </Card>
</CardGroup>
me9ithch lw7da t3a recherch just chof hetha o 9ooli chnowa nbdil fiyhbithbit

            </div>
        )
    }
}
