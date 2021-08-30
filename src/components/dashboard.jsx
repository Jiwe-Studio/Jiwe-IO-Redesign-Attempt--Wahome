import React,{ PureComponent } from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card,Table,ListGroup, ListGroupItem } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dash=()=>{
	const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

	return(<>
		<div className="container-fluid">
		<div className="row p-4">


<div className="col-md-8 col-12 col-sm-12">
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
</div>

<div className="col-md-2 col-6 col-sm-6 pt-2">
<div className="card p-3">
 <small className="text-dark text-start">Game Downloads</small>
 <div className="text-end"><SimpleLineIcon name="graph" /></div>
 <h4 className="font-weight-bold ">0843</h4>
</div>
</div>

<div className="col-md-2 col-6 col-sm-12 pt-2">
<div className="card p-3 ">
 <small className="text-dark  text-start">Page Visits</small>
 <div className="text-end"><SimpleLineIcon name="graph" /></div>
 <h4 className="font-weight-bold ">210</h4>
</div>
</div>
</div>
</div>


<div className="container-fluid">
<div className="row pt-2">
<div className="col-md-6 col-sm-12 col-12">
<ListGroup className="border-bottom border-top" style={{borderStyle:"solid"}}>
      <ListGroupItem className="border-left font-weight-bold">Usoni <span className="text-end text-muted"><SimpleLineIcon name="game-controller" /></span></ListGroupItem>
      <ListGroupItem className="border-left font-weight-bold">Cyber Punk <span className="text-end text-muted"><SimpleLineIcon name="game-controller" /></span></ListGroupItem>
      <ListGroupItem className="border-left font-weight-bold">COD mobile <span className="text-end text-muted"><SimpleLineIcon name="game-controller" /></span></ListGroupItem>
      <ListGroupItem className="border-left font-weight-bold">Cras justo odio <span className="text-end text-muted"><SimpleLineIcon name="game-controller" /></span></ListGroupItem>


    </ListGroup>
</div>
<div className="col-md-6 col-sm-12 col-12">
<div className="pt-2">
<div className="card pl-2 pt-2 pr-4 pb-2 " style={{height:"187px"}}>
 
  <div className="row pr-1 text-center">
  <small className=" text-dark text-start border-bottom pb-1 font-weight-bold">Top Gamers</small>
  <div className="pb-2"></div>

<div className="col-md-4 col-4 col-sm-4 pb-1">
 <Image style={{maxHeight:"50px",maxWidth:"50px"}} src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" roundedCircle />
</div>
<div className="col-md-4 col-4 col-sm-4">
 <Image style={{maxHeight:"50px",maxWidth:"50px"}} src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" roundedCircle />
</div>
<div className="col-md-4 col-4 col-sm-4">
 <Image style={{maxHeight:"50px",maxWidth:"50px"}} src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" roundedCircle />
</div>
<div className="col-md-4 col-4 col-sm-4">
 <Image style={{maxHeight:"50px",maxWidth:"50px"}} src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" roundedCircle />
</div>
<div className="col-md-4 col-4 col-sm-4">
 <Image style={{maxHeight:"50px",maxWidth:"50px"}} src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" roundedCircle />
</div>
<div className="col-md-4 col-4 col-sm-4">
 <Image style={{maxHeight:"50px",maxWidth:"50px"}} src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80" roundedCircle />
</div>

</div>
  </div></div></div></div></div>

<div className="container-fluid">
<div className="row pt-2">
<div className="col-md-6 col-6 col-sm-6">
<h4 className="text-dark font-weight-bold"><span className="float-left text-muted pr-1"><SimpleLineIcon name="fire" /></span>Trending Games</h4></div>
<div className="col-md-6 col-sm-6 col-6">
<FormSelect style={{borderRadius:"0px",borderColor:"black"}}>
      <option value="first">Platform</option>
      <option value="second">PC</option>
      <option value="third">
       Console
      </option>
      <option value="third">
      mobile
      </option>
    </FormSelect>

</div>

<div className="col-md-12 col-12 col-sm-12">
<div className="">

<span className="text-dark font-weight-bold pr-3"><u>All games</u></span>

<span className="text-dark text-muted  pr-3">Strategy</span>
<span className="text-dark text-muted pr-3">Post Apocalyptic</span>
<span className="text-dark text-muted pr-3">Racing</span>
<span className="text-dark text-muted pr-3">Action</span>
<span className="text-dark text-muted pr-3">Adventure</span>
<span className="text-dark text-muted pr-3">Others</span>

</div>



</div></div></div>






<div className="container-fluid pb-5">
<div className="row">
<div className="col-md-12 col-12 col-sm-12">
<div className="card p-3">
<Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Game Name</th>
        <th>Game Type</th>
        <th>Ratings</th>
        <th>Total Downloads</th>
        <th>Weekly Downloads</th>
        <th>Publisher</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="game-controller" /></span></td>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="arrow-right" /></span>Some game</td>
        <td>Adventure</td>
        <td>4.5</td>
        <td>4900</td>
        <td>12</td>
        <td>Jiwe Studio</td>
      </tr>
      <tr>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="game-controller" /></span></td>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="arrow-right" /></span>Another Game</td>
        <td>Post Apocalyptic</td>
        <td>5</td>
        <td>4900</td>
        <td>490</td>
        <td>Jiwe Studio</td>
      </tr>
      <tr>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="game-controller" /></span></td>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="arrow-right" /></span>Forgotten Game</td>
        <td>Thriller,Action</td>
        <td>4.5</td>
        <td>431</td>
        <td>12</td>
        <td>Jiwe Studio</td>
      </tr>
    </tbody>
  </Table></div></div></div>
</div>
	</>);
}
export default Dash;