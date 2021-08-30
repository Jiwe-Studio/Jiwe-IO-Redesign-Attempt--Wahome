import React from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card,Table } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import { Footer } from "../components";


const Proedit=()=>{

	 
	return(<>
	    <div className="container-fluid pt-5">
	    <div className="card p-3">
<div className="row">
<Form>
<Row>
<div className="col-md-6 col-12 col-sm-12">
 <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>
 
 <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>

</div>

<div className="col-md-6 col-12 col-sm-12">
<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Phone" style={{borderRadius:"0px",borderColor:"black"}}/>
  </Form.Group>
</div>


  
  </Row>
  <Row className="pt-4">
  
 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Bio</Form.Label>
    <Form.Control as="textarea" rows={3} style={{borderRadius:"0px",borderStyle:"solid"}} />
  </Form.Group>
  </Row>

  <a href="#" variant="danger" type="submit" className="btn btn-outline-success btn-lg float-right" style={{borderRadius:"0px"}}>
Update 
  </a>
  </Form>


<div className="col-md-12 col-12 col-sm-12">
<h6 className="font-weight-bold">Delete Account</h6>
 <span className="text-muted font-weight-bold">This action is not reversible make sure you know what you are doing before proceeding</span>
 <div className="row">
 <div className="col-md-4 col-4 col-sm-4">
 <a href="#" variant="danger" type="submit" className="text-dark btn btn-outline-danger btn-lg float-right" style={{borderRadius:"0px"}}>
Delete Account
  </a></div></div>
</div>

</div></div></div>
    </>);
}

export default Proedit;