import React, { useState } from "react";
import { Form,Image,FormSelect,Modal,Button,Card } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';

const Comments=(props)=>{

  
  const [lgShow, setLgShow] = useState(false);
	return(
<>
<div className="container-fluid">
<div className="row pb-3">
<div className="col-md-12 col-12 col-sm-12 pt-1">

<Card { ...props.className } style={{borderRadius:"0px",borderStyle:"solid"}}>
<Card.Body>
<div className="row">





<div className="col-md-12 col-12 col-sm-12">
<div className="row">
<span className="text-dark font-weight-bold pl-3">Wahome Mutahi</span>
<span className="text-dark">Developer</span>
  <Image style={{maxWidth:"90px",height:"70px" }}  src="https://cdn.vox-cdn.com/thumbor/4La5CQftizVf445-LsEKVU1NydU=/0x0:3840x2160/1570x883/filters:focal(2400x56:3014x670):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68471042/Cyberpunk2077_No_Future_RGB.0.jpg" roundedCircle />
<span className="text-dark font-weight-bold text-end">4.5</span>
</div>


<span class="">i think i can copy paste thins and paste it again untill in gets tired of being copy pasted
i think i can copy paste thins and paste it again untill in gets tired of being copy pasted
i think i can copy paste thins and paste it again untill in gets tired of being copy pasted
i think i can copy paste thins and paste it again untill in gets tired of being copy pasted
i think i can copy paste thins and paste it again untill in gets tired of being copy pasted</span>
</div>
</div>
<div className="border-top pb-1"></div>
<div className="text-start "><a href="#" className="btn btn-outline-dark" rounded><SimpleLineIcon name="like" /></a>190 likes  <a href="#" onClick={()=> setLgShow(true) } className="btn btn-dark roundedCircle"><SimpleLineIcon name="bubbles" /></a></div>

</Card.Body>




</Card>


</div>

      <Modal
      className="col-md-12"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
         replying to wahome mutahi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

    <Form.Control as="textarea" placeholder="replying to wahome mutahi" rows={3} />
  </Form.Group>

  <div className="border-bottom pb-1"></div>
  <div className="pt-1 text-end">
<a href="" className="btn btn-danger ">Finish</a></div>
</Form>
</Modal.Body>
      </Modal>



</div>
</div>
</>		);
}
export default Comments;