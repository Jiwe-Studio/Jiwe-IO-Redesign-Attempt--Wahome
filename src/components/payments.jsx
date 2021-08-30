import React from "react";
import { Col,Row,Form,Image,FormSelect,Modal,Button,Card,Table } from 'react-bootstrap';
import SimpleLineIcon from 'react-simple-line-icons';
import { Footer } from "../components";





const Payment = ()=>{


	return(<>
	<div className="container-fluid">
	<div className="row">

	<div className="col-md-4 col-12 col-sm-12 pt-5">
	<div className="card p-5">

	<div className="row ">

	<div className="col-md-6 col-6 col-sm-6">
	<small>Name</small>
	<p className="font-weight-bold h6">Wahome Mutahi</p>
	</div>
<div className="col-md-6 col-6 col-sm-6 text-end">
	<small>Wallet Number</small>
	<p className="font-weight-bold h6">********2345</p>
	</div>

	</div>
<div className="row pt-3 pl-5">
	<small>Balance</small>
	<p className="font-weight-bold h1">$6,345.00</p>


</div>
	</div>
<div className="row pt-2">
<div className="col-md-3 col-3 col-sm-3">
<a href="" className="btn btn-danger" style={{borderRadius:"0px"}}><small> Top Up</small></a>
</div>
<div className="col-md-3 col-3 col-sm-3">
<a href="" className="btn btn-outline-dark" style={{borderRadius:"0px"}}> <small> Fundraise </small></a></div>
<div className="col-md-3 col-3 col-sm-3">
<a href="" className="btn btn-outline-dark" style={{borderRadius:"0px"}} ><small>  Donate </small></a></div>
</div>

	</div>

	<div className="col-md-3 col-6 col-sm-6 pt-5">
	<div className="pb-2">
<div className="card p-2">
<small>Weekly Expenditure</small><p className="text-end"><SimpleLineIcon name="graph"  /></p>
<p className="font-weight-bold h1">$6,345.00</p>
</div>
</div>

<div className="pb-2">
<div className="card p-2">
<small>Weekly Income</small><p className="text-end"><SimpleLineIcon name="graph"  /></p>
<p className="font-weight-bold h1">$6,345.00</p>
</div>
</div>
	</div>

<div className="col-md-3 col-6 col-sm-6 pt-5">
<div className="pb-2">
<div className="card p-2">
<small>Monthly Expenditure</small><p className="text-end"><SimpleLineIcon name="graph"  /></p>
<p className="font-weight-bold h1">$6,345.00</p>
</div>
</div>

<div className="pb-2">
<div className="card p-2">
<small>Monthly Income</small><p className="text-end"><SimpleLineIcon name="graph"  /></p>
<p className="font-weight-bold h1">$6,345.00</p>
</div>
</div>

	</div>



	</div></div>

<div className="container-fluid pt-2 pb-5">
<div className="row">
	<div className="col-md-6 col-6 col-sm-6"><span className="font-weight-bold text-muted h6">Transactions</span></div>
	<div className="col-md-6 col-6 col-sm-6 text-end"><span><a href="" class="text-info">New Transaction</a></span></div>
<div className="col-md-12 col-12 col-sm-12">

<div className="card p-3">
<Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Invoice Number</th>
        <th>Transaction</th>
        <th>Date</th>
        <th>Transaction Type</th>
        <th>Amount</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="game-controller" /></span></td>
        <td>AhHPO12</td>
        <td>Bought Cyber punk</td>
        <td>12 dec 2020</td>
        <td>Credit</td>
        <td>120</td>
        
      </tr>
      <tr>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="game-controller" /></span></td>
        <td>AhHPO12</td>
        <td>Bought BattlePass</td>
        <td>12 dec 2020</td>
        <td>Debit</td>
        <td>4900</td>
       
      </tr>
      <tr>
        <td><span className="float-left text-muted pr-1"><SimpleLineIcon name="game-controller" /></span></td>
        <td>AhHPO12</td>
        <td>Bought Cyber punk</td>
        <td>10 dec 2020</td>
        <td>Cerdit</td>
        <td>1200</td>
        
      </tr>
    </tbody>
  </Table></div>

</div>

</div>
</div>



	</>);


}
export default Payment;