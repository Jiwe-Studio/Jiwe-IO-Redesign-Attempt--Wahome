import React from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card,Table,Tab,Tabs } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import { Payment,Proedit,Security } from "../components";

const Actions = ()=>{



return(<>
	

<div className="container-fluid pt-5">
<div className="row">
<Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
  variant="pills"
>
  <Tab eventKey="home" title="Profile">
    <Proedit />
  </Tab>
  <Tab eventKey="profile" title="Security">
    <Security />
  </Tab>
  <Tab eventKey="contact" title="Payments">
    <Payment />
  </Tab>
</Tabs>

</div></div>
</>);




}
export default Actions;