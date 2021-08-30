import React from 'react';
import { Navigation,Games,Banner,ViewGame,GameUpload,Proedit,Dash,Login,Footer,Payment,Security,Actions } from './components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav,Navbar,Container} from 'react-bootstrap'; 
import { Alert,Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Col,Button,Breadcrumb,BreadcrumbItem } from "shards-react";


function App() {
  return (
   <div className="App">
      <Router>
        <Navigation />
        <Switch>
         <Route path="/dashboard" exact component={() => <Dash />} />
          <Route path="/games" exact component={() => <Games/>} />
           <Route path="/bannergames" exact component={() => <Banner/>} />
           <Route path="/viewgame" exact component={() => <ViewGame/>} />
          <Route path="/uploadgame" exact component={() => <GameUpload/>} />
            <Route path="/profileedit" exact component={() => <Proedit/>} />
            <Route path="/login" exact component={() => <Login />} />
           <Route path="/payments" exact component={() => <Payment />} />
           <Route path="/security" exact component={() => <Security />} />
            <Route path="/actions" exact component={() => <Actions />} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
