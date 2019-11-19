import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap'

// import { Panel } from 'bootstrap'
// import Panel from 'react-bootstrap/lib/Panel'
// import Button from 'react-bootstrap/lib/Button'
// import CustomerDetails from './CustomerDetails'
import axios from 'axios'


// var topic = function (){
//  return(
export default class topic extends Component {
 
   
  constructor(props) {
    super(props);
    this.state = {}
  } 
  render() {return(

<div>
{/* <Card  >
        <Card.Heading>
          <Card.Title componentClass="h3">Kevin Ching</Card.Title>
          <Card.Title componentClass="h3">Data scientist of United Health</Card.Title>
        </Card.Heading>
        <Card.Body></Card.Body>
</Card> */}



  
  <div  className="container">
<div className="row">

    
     <div className="col-md-6">


     {/* <Card >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title><p style={{auto:"center",color:"red",fontSize:40,}}> Some thougts based on quantum mechnaics and relativity </p>
</Card.Title>
    <Card.Text>
    <p style={{textAlign:"justify", position:"absolute",left:10}}>

<span>&nbsp;&nbsp;</span>The last two weeks we covered some intriguing ideas related to quantum interference and the delayed choice quantum eraser in quantum mechanics, as well as the concept of time, especially, the extended simultaneity concept in relativity. This week, we will present some thoughts on these topics in a theological viewpoint!</p>

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}


        <Card style={{backgroundColor:"#7ea8cc"}}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    {/* <Card.Title><p style={{auto:"center",color:"blue",fontSize:25,}}> Speaker: Kevin Ching</p> */}
    <Card.Title>Speaker: Kevin Ching
</Card.Title>
    <Card.Text>
    {/* <p style={{auto:"center",color:"green",fontSize:20,}}>--- data scientist at United Health </p> */}
     --- data scientist at United Health 
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

     <br />
        <br />

        <p style={{color: "red",fontSize:40}}>What is the nature of quantum interference?</p>
        

{/* <p style={{auto:"center",color:"blue",fontSize:25,}}> Speaker: Kevin Ching </p>
<p style={{auto:"center",color:"green",fontSize:20,}}>--- data scientist at United Health </p>

 */}

  
{/* <p style={{textAlign:"justify",width: 1200, wordWrap: "break-word", display: "block",marginLeft: "auto", marginRight: "auto"}}> */}
<p style={{textAlign:"justify", position:"absolute",left:10}}>

<span>&nbsp;&nbsp;</span>The last two weeks we covered some intriguing ideas related to quantum interference and the delayed choice quantum eraser in quantum mechanics, as well as the concept of time, especially, the extended simultaneity concept in relativity. This week, we will present some thoughts on these topics in a theological viewpoint!</p>
<br />
        <br /> <br />
        <br /> <br />
        <br /> 

        <p style={{size:30}}><b>Address</b>: Room D504, Bethlehem Baptist Church North Campus,</p>
          <p style={{size:30}}>5151 Program Ave
Mounds View, Minnesota 55112</p>
<p ><center><b>Time</b>:  7 pm to 8 pm, Nov 20(Wednesday)</center></p>
  
            <p style={{color: "red",fontSize:40}}>All are Welcome!</p>
</div>

{/* <div className="col-md-1">

     </div> */}

        <div className="col-md-6">
        <br />
        <br /> <br />
      

<p style={{color: "blue",fontSize:20,   position: "absolute",left: 30}}>Some videos to watch:</p>
   
        <br />
        <br />
        <ol style={{textAlign:"left"}}> 
            <li>  <a href="https://www.youtube.com/watch?v=U7Z_TIw9InA" target="_blank" rel="noopener noreferrer">Delayed Choice Quantum Eraser Explained</a> </li>
            <li>  <a href="https://www.youtube.com/watch?v=p-MNSLsjjdo" target="_blank" rel="noopener noreferrer">The Quantum Experiment that Broke Reality</a> </li>
            <li>  <a href="https://www.youtube.com/watch?v=8ORLN_KwAgs" target="_blank" rel="noopener noreferrer">How the Quantum Eraser Rewrites the Past</a> </li>
            <li>  <a href="https://www.youtube.com/watch?v=ZuvK-od647c" target="_blank" rel="noopener noreferrer">Quantum Entanglement & Spooky Action at a Distance</a> </li>  
        </ol>
        
      

        <br />     <br />
        

          <p style={{color: "blue",fontSize:20,   position: "absolute",left: 30}}>Questions to consider:</p>
  
        <br />
        <br />

        <ol style={{textAlign:"left"}}> 
{/* <li> The results of these experiments are very unexpected and unintuitive. How can we concisely articulate the nature of this mystery to novices?</li>

<li> Scientific theory is all about repeatable experiments which either buttress or debunk proposed hypotheses. In contrast philosophy is often said to take over where science ends. In what sense does it seem as if quantum mechanics is now crossing over into the realm of philosophy?</li> */}



<li>How these scentific facts "points to" the existence of God describd in bible? </li>

</ol>
 <br />
        <br /> <br />
        <br />

        </div>
        </div>

</div>
</div>
       
  )
       
    }

    // export default topic; 

         
    }