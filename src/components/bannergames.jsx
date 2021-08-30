import React from  'react';
import { InputGroup,InputGroupAddon,InputGroupText,FormInput } from 'shards-react';
import { Games } from '../components';

const Banner=()=>{



	return(<>
		<div className="container-fluid" >
<div className="row bg-dark align-items-center shadow" style={{backgroundRepeat:'no-repeat', height:"500px", backgroundSize:"cover",backgroundImage:`url("https://jiwe.io/static/media/usoni-launch-logo.b341cbfa.svg")`}}>
<div className="row justify-content-start pl-2">
<h1 className="font-weight-bold text-white">SELL BUY AND PLAY GAMES</h1>
<div className="row justify-content-start"><div className="col-md-3">
<a href="#" className="btn btn-outline-light text-white btn-lg">SIGN UP AS A GAMER </a></div></div>
<div className="row justify-content-start pt-1"><div className="col-md-3">
<a href="#" className="btn btn-light text-dark btn-lg">SUBMIT A GAME</a></div></div></div>

</div>

<div className="row pt-2 justify-content-start">
<div className="col-md-8 col-12 col-sm-12">
<div className="row">
<div className="col-md-2 col-2 col-sm-2">
<h6 className="font-weight-bold "><u>All Games</u></h6></div>

<div className="col-md-2 col-2 col-sm-2" ><span className="font-weight-bold text-muted">post-apocalyptic</span></div>
<div className="col-md-2 col-2 col-sm-2"><span className="font-weight-bold text-muted">Strategy</span></div>
<div className="col-md-2 col-2 col-sm-2"><span className="font-weight-bold text-muted">more..</span></div>
</div>
</div>

<div className="col-md-4 col-12 col-sm-12">
<div className="row"><div className="col-md-12 col-12 col-sm-12">
<InputGroup className="mb-2">
        <FormInput placeholder="search" />
         <InputGroupAddon type="append">
          <InputGroupText><a href="#" className="btn btn-dark">search</a></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </div></div>
</div>
</div>

<Games />

</div>

	</>);

}
export default Banner;