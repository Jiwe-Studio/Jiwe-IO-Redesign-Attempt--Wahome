import React from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import { Footer } from "../components";

const Login=()=>{


	return(<>
		
<div  className="container-fluid">
<div className="card p-4">
<div className="row">
<div className="col-md-8 col-12 col-sm-12"><h2 className="font-weight-bold text-muted text-center">Sign Up</h2></div>
<div className="col-md-4 col-12 col-sm-12">No Account? Create one <a href="#" className="text-danger text-end">Register</a></div>
<div className="col-md-6 col-12 col-sm-12 bg-dark" style={{backgroundRepeat:'no-repeat', height:"500px", backgroundSize:"cover",backgroundImage:`url("https://www.ledgerinsights.com/wp-content/uploads/2019/09/video-gaming-810x476.png")`}}>

</div>



<div className="col-md-6 col-12 col-sm-12 border-left">

<Form>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Full Name" style={{borderRadius:"0px",borderColor:"black"}}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={{borderRadius:"0px",borderColor:"black"}}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <div className="row pb-2 pr-2 ">

  <a href="#" variant="danger" type="submit" className="btn btn-danger btn-lg text-center" style={{borderRadius:"0px"}}>
  Login
  </a>
  
  </div>

</Form>
<div className="row text-center">
<div className="col-md-12 col-12 col-sm-12">
<a href="#" variant="danger" type="submit" className="btn btn-outline-dark btn-lg float-center" style={{borderRadius:"0px"}}>
<SimpleLineIcon name="social-google" /> <p>login with google</p>
  </a>
</div></div>

</div>




</div></div></div>
<Footer />


	</>);
}
export default Login;