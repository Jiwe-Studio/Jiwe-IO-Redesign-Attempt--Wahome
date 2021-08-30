import React from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card,Table } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import { Footer } from "../components";


const Security = ()=>{



	return(<>
		<div className="container-fluid">
		
		<div className="row text-center justify-content-center pt-5">

<div className="col-md-6 col-12 col-sm-12 border-left pt-3">
<div className="card p-5">
<Form>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Current Password</Form.Label>
    <Form.Control type="password" placeholder="Password" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>
 
   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>New Password</Form.Label>
    <Form.Control type="password" placeholder="Password" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>
  


  <a href="#" variant="danger" type="submit" className="btn btn-outline-success btn-lg float-right" style={{borderRadius:"0px"}}>
Update Password
  </a>
  
 

</Form></div></div>







</div></div>
	</>);
}

export default Security;