import React, { Component } from 'react'
import {Card,CardGroup,ListGroupItem,Button} from 'react-bootstrap';
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
<Card style={{ width: '18rem' }}>
<Card.Title>{this.props.v}</Card.Title>
  <Card.Img variant="top" src={this.props.vi} />
  <Card.Body>
    <Card.Text style={{color:"orange"}}>
    This realistic series focuses on the exploits of the hero Ragnar Lothbrok who aspires to extend Viking power in favor of a leader lacking political vision.
    </Card.Text>
    orginal serie netflix
    <Button href="https://www.netflix.com/search?q=vaiking&jbv=70301870">Click for seri</Button>
  </Card.Body>
</Card>
<>
  <Card>
  <Card.Title>{this.props.j}</Card.Title>
    <Card.Img variant="top" src={this.props.jw} />
    <Card.Body>
      <Card.Text style={{color:"gold"}}>
      John Wick, also known as John Wick: Chapter One, is an American neo-noir action film directed by Chad Stahelsky and written by Derek Kolstad. Released in 2014. The film stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adriani Palecki, Bridget Moynahan, Dean Winters. , Ian McShane, John Leguizamo and Willem Dafoe. It is the first movie in the John Wick series
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
  <Card.Title>{this.props.ti}</Card.Title>
    <Card.Body>
      <Card.Text style={{color:'blue'}}>
      While going it alone, Dick Grayson, Batman's former partner, meets several young heroes in desperate need of a mentor
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={this.props.ta}/>
    <br/>
    <Button href="https://www.netflix.com/search?q=john%20wick&jbv=80218200">Click for seri</Button>
  </Card>
  <br/>
  <Card className="bg-dark text-white">
  <Card.Title>{this.props.sp}</Card.Title>
  <Card.Img src={this.props.ma} />
  <Card.ImgOverlay>
    <Card.Text>
    In this adaptation of the famous superhero franchise, Peter Parker learns how to use his new powers to fight the Lizard during his high school years.
    </Card.Text>
    <Button href="https://www.netflix.com/search?q=john%20wick&jbv=70208599" >Click for serie</Button>
  </Card.ImgOverlay>
</Card>

</>


            </div>
        )
    }
}
