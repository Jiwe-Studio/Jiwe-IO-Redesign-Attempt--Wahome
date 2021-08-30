import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Collapse,
  FormInput,
  FormSelect

} from "shards-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";



const Games = () =>{



	return(
<>

<div className="container pt-4">
      <div className="row pt-2 pb-2">


      <div className="col-6 col-sm-6 col-md-3 pt-1">
      <FormSelect>
      <option value="first">Price</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect></div>
     <div className="col-6 col-sm-6 col-md-3 pt-1">
      <FormSelect>
      <option value="first">Platform</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect></div>
     <div className="col-6 col-sm-6 col-md-3 pt-1">
      <FormSelect>
      <option value="first">Genre</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect></div>


 <div className="col-6 col-sm-6 col-md-3 float-right pt-1">
      <FormSelect>
      <option value="first">Genre</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect></div>

    </div>
      <div className="row">
      <div className="col-12 col-sm-12 col-md-4">
      <div className="pt-3 pb-2 pr-1 pl-1">
 <Card className="">
      <CardImg src="https://www.capacitymedia.com/Image/ServeImage?id=47062&w=780&h=442&cr=true" />
      
      <CardFooter> <CardTitle className="text-capitalize">game name</CardTitle> <p className="font-weight-bold text-muted">#strategy,#postapocalyptic.</p></CardFooter>
    </Card>
    </div>
</div>

<div className="col-12 col-sm-12 col-md-4">
      <div className="pt-3 pb-2 pr-1 pl-1">
 <Card className="">
      <CardImg src="https://www.capacitymedia.com/Image/ServeImage?id=47062&w=780&h=442&cr=true" />
      
      <CardFooter> <CardTitle className="text-capitalize">game name</CardTitle> <p className="font-weight-bold text-muted">#strategy,#postapocalyptic.</p></CardFooter>
    </Card>
    </div>
</div>

<div className="col-12 col-sm-12 col-md-4">
      <div className="pt-3 pb-2 pr-1 pl-1">
 <Card className="">
      <CardImg src="https://www.capacitymedia.com/Image/ServeImage?id=47062&w=780&h=442&cr=true" />
      
      <CardFooter> <CardTitle className="text-capitalize">game name</CardTitle> <p className="font-weight-bold text-muted">#strategy,#postapocalyptic.</p></CardFooter>
    </Card>
    </div>
</div>
<div className="col-12 col-sm-12 col-md-4">
      <div className="pt-3 pb-2 pr-1 pl-1">
 <Card className="">
      <CardImg src="https://www.capacitymedia.com/Image/ServeImage?id=47062&w=780&h=442&cr=true" />
      
      <CardFooter> <CardTitle className="text-capitalize">game name</CardTitle> <p className="font-weight-bold text-muted">#strategy,#postapocalyptic.</p></CardFooter>
    </Card>
    </div>
</div>
<div className="col-12 col-sm-12 col-md-4">
      <div className="pt-3 pb-2 pr-1 pl-1">
 <Card className="">
      <CardImg src="https://www.capacitymedia.com/Image/ServeImage?id=47062&w=780&h=442&cr=true" />
      
      <CardFooter> <CardTitle className="text-capitalize">game name</CardTitle> <p className="font-weight-bold text-muted">#strategy,#postapocalyptic.</p></CardFooter>
    </Card>
    </div>
</div>
<div className="col-12 col-sm-12 col-md-4">
      <div className="pt-3 pb-2 pr-1 pl-1">
 <Card className="">
      <CardImg src="https://www.capacitymedia.com/Image/ServeImage?id=47062&w=780&h=442&cr=true" />
      
      <CardFooter> <CardTitle className="text-capitalize">game name</CardTitle> <p className="font-weight-bold text-muted">#strategy,#postapocalyptic.</p></CardFooter>
    </Card>
    </div>
</div>


</div>

      </div>


</>
		);

}
export default Games;