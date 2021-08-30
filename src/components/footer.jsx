import React from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card,Table } from 'react-bootstrap';

const Footer=()=>{


	return(<>
		<div className="contaiber-fluid   pt-4">

<div className="row bg-dark p-1 pb-3">
<div className="col-md-4 col-4 col-sm-4">
	<Image style={{maxHeight:"70px",maxWidth:"70px"}} src="https://jiwe.io/static/media/logo-white.a7e18f0a.png" roundedCircle />
</div>
<div className="col-md-2 col-2 col-sm-2">
<small className="text-white h6">Home</small>
</div>

<div className="col-md-2 col-2 col-sm-2">
<small className="text-white h6">Browse Games</small>
</div>
<div className="col-md-2 col-2 col-sm-2">
<small className="text-white h6">Terms Of Service</small>
</div>
<div className="col-md-2 col-2 col-sm-2">
<small className="text-white h6">Privacy Policy</small>
</div>
<div className="border-bottom pt-1 pb-1"></div>

<div className="row">
<p className="text-center text-white"> cridentials here and social media logos</p>
</div>

</div></div>
	</>);
}
export default Footer;