import React, { useState } from 'react';
import { Image,FormSelect,Modal,Button,Card,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import SimpleLineIcon from 'react-simple-line-icons';
import StarRating from 'react-bootstrap-star-rating';
import { Comments,Comms } from '../components';



const ViewGame = () =>{
const [show, setShow] = useState(false);
 

	return(
<div className="container-fluid ">
<div className="row pl-2">
<div className="pt-3 pb-3 font-weight-bold h1">USONI GAME</div>
<div className="col-md-6 col-12 col-sm-12 ">
<div className="row justify-content-start pl-5">
 <Image className="" style={{maxWidth:"500px",height:"400px"}} src="https://cdn.vox-cdn.com/thumbor/4La5CQftizVf445-LsEKVU1NydU=/0x0:3840x2160/1570x883/filters:focal(2400x56:3014x670):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68471042/Cyberpunk2077_No_Future_RGB.0.jpg" rounded />
</div>

</div>

<div className="col-md-6 col-12 col-sm-12 ">

<h5 className="text-center text-muted pt-3 ">#post-apocalyptic ,strategy</h5>
<div className="row pt-2 pl-2 pr-2 border-left">
<p className="text-muted"> That line, from William Gibson’s  
1984 novel Neuromancer, helped define the genre now known as 
cyberpunk. The book conjures a world where today’s cutting-edge
 trends are tomorrow’s embarrassing cliches and where desperate
  hustlers can rise overnight and fade without a trace.

Cyberpunk 2077, the long-awaited game by Witcher studio CD
 Projekt Red, is about a place called Night City. But in its
  version, the past is never far away. Cyberpunk 2077 was announced
   in 2012, and it’s based on a tabletop series that launched in 1988.
    After years of work and reportedly months of brutal crunch time,
     CD Projekt Red has delivered on an incredibly ambitious vision:
      a vast virtual city with a complex narrative and roleplaying system.

It’s done that by playing all those elements extremely safe and 
straight. Cyberpunk 2077 is a frequently satisfying and sometimes 
impressive game, but despite its setting in the fast-moving future,
 it’s almost never a surprising one.</p>
</div>
<div className="container">
<div className="row justify-content-center text-center">


<div className="col-md-6 col-6 col-sm-6"><a herf="#" style={{textDecoration:"none"}} className="btn btn-light text-dark btn-lg"><small>Get For Free</small></a></div>
<div className="col-md-6 col-6 col-sm-6"><a href="#" style={{textDecoration:"none"}} class="btn btn-danger btn-lg"><small>Donate</small></a></div>
</div>
</div>

<div className="container pt-3">
<div className="row justify-content-center text-start">
<div className="col-md-10 col-sm-12 col-12">
	<span className="text-dark font-weight-bold text-start">developer</span>
	<p className="text-muted text-center">Jiwe Studios</p>
	<hr  className="border-dark" />
	<span className="text-dark font-weight-bold text-start">Device Specs</span>
	<p className="text-muted text-center">4gb + ram and dra and abovegon graphics engine</p>
	<hr  className="border-dark" />
	
</div>

</div>

</div>


</div>

<div className="container">
<div className="row">

<h1 className="font-weight-bold">Game Reviews</h1>
<div className="col-md-2 col-12 col-sm-12">
<StarRating
        defaultValue={5}
        min={0}
        max={10}
        step={0.5} />
<p className="text-dark font-weight-bold"> 4.7</p></div>

<div className="col-md-4 col-12 col-sm-12">
<FormSelect>
      <option value="first">Game Version</option>
      <option value="second">1.0.0.</option>
      <option value="third">
        1.0.1
      </option>
      <option value="third">
        1.0.3
      </option>
    </FormSelect>
</div>

<div className="col-md-6 col-12 col-sm-12 text-end pt-1">
<Button className="float-right" variant="dark" onClick={() => setShow(true)}>
        Add Revivew
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Cyber Punk Game Rating And Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <Form>
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

    <Form.Control as="textarea" placeholder="say something about this game" rows={3} />
  </Form.Group>
  <span className="font-weight-bold">How will you rate this game \\ (rating stars here)//</span>
  <div className="border-bottom pb-1"></div>
  <div className="row ">

  
  <div className="col-md-6 col-6 col-sm-6 ">
  <div className="col-md-12 col-12 col-sm-12"><span className="font-weight-bold">
     How were the graphics?</span></div>
    
      <Form.Check
        inline
        label="Beautiful"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
      />
      <Form.Check
        inline
        label="Good"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
      />
   <Form.Check
        inline
        label="Decent"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
      />
      <Form.Check
        inline
        label="Poor"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
      />

     </div>
       <div className="col-md-6 col-6 col-sm-6">
       <div className="col-md-12 col-12 col-sm-12"><span className="font-weight-bold">
     How was the gameplay?</span></div>
 <Form.Check
        inline
        label="Entertaining"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
      />
      <Form.Check
        inline
        label="Good"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
      />
   <Form.Check
        inline
        label="Decent"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
      />
      <Form.Check
        inline
        label="could use some work"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
      />

      
  </div></div>
   <div className="pt-1 text-end">
<a href="" className="btn btn-danger ">Finish</a></div>
</Form>
          </p>
        </Modal.Body>
      </Modal>

</div>


</div>

</div>


<Comments className="bg-light" />
<Comments />
<Comments />

</div>

</div>
		);
}
export default ViewGame;