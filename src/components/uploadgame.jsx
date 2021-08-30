import React, { useState,useCallback } from 'react';
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import {useDropzone} from 'react-dropzone';



const GameUpload =(props)=>{
 

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li className="card pt-3 pb-3 pr-3 pl-3 text-center" style={{borderRadius:"0px"}} key={file.path}>
    {file.path} - {file.size} bytes
    </li>
  ));


	return(<>
		<div className="container-fluid pb-3 pt-3">
		<div className="card p-5">
		<div className="row pt-3 ">
		<div className="border-bottom pb-1">
<h3 className="font-weight-bold">Upload a Game</h3>
<span className="text-muted font-weight-bold">blas blas blasblas blas blasblas blas blasblas blas blasblas blas blas</span>
</div>
<div className="row pt-2">
<Form>
  <Row>
    <div className="col-md-6 col-12 col-sm-12">
        <Form.Label className="font-weight-bold">Game Title</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
 <Form.Label className="font-weight-bold">Tagline</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
       <Form.Label className="font-weight-bold">Project Url</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
       <Form.Label className="font-weight-bold">Game Genre</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
       <Form.Label className="font-weight-bold">Appstore Link</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
       <Form.Label className="font-weight-bold">Game Tags</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
    </div>
    <div className="col-md-6 col-12 col-sm-12 pt-4">
<section className="container card pt-2 pb-1 text-center"  style={{borderRadius:"0px",borderStyle:"dotted"}}>
      <div {...getRootProps({className: 'dropzone'})} >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
<div className="pt-0">
     <Form.Label className="font-weight-bold">Game Trailer</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />

        <Form.Group controlId="formFile" className="font-weight-bold mb-3">
    <Form.Label>Game Screenshot</Form.Label>
    <Form.Control type="file"  style={{borderRadius:"0px",borderColor:"black"}} />
  </Form.Group>

   <Form.Group controlId="formFile" className="font-weight-bold mb-3">
    <Form.Label>Upload Game</Form.Label>
    <Form.Control type="file"  style={{borderRadius:"0px",borderColor:"black"}} />
  </Form.Group>
 </div>
    </div>
    
  </Row>
  <Row className="pt-4">
<h3 className="font-weight-bold ">Game description</h3>
<small className="pb-2 text-grey font-weight-bold">blas blas blasblas blas blasblas blas blasblas blas blasblas blas blas
</small>
 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} style={{borderRadius:"0px",borderStyle:"solid"}} />
  </Form.Group>
  </Row>
  <Row className="pt-2 pb-4">
<h3 className="font-weight-bold">Pricing</h3>
<small className="pb-2 text-grey font-weight-bold">blas blas blasblas blas blasblas blas blasblas blas blasblas blas blas
</small>

<div className="col-md-6 col-6 col-sm-6 pt-5">

<FormSelect style={{borderRadius:"0px",borderColor:"black"}}>
      <option value="first">Pricing</option>
      <option value="second">free</option>
      <option value="third">
        Paid
      </option>
      <option value="third">
       Donations
      </option>
    </FormSelect>
</div>

<div className="col-md-6 col-md-6 col-sm-6 pt-3">
 <Form.Label className="font-weight-bold">Price</Form.Label>
      <Form.Control placeholder="" style={{borderRadius:"0px",borderColor:"black"}} />
</div>

  </Row>
  <div className="pt-3 pb-5 text-end">
  <a href="#" className="btn btn-danger">Submit</a>
</div>
</Form>
</div>


</div></div></div>
	</>);

}
export default GameUpload;