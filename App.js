import React,{Component,lazy,Suspense} from 'react';
import Navigation from "../src/components/navigation/navigation";
import {Route,Switch} from "react-router-dom";
import Home from "../src/components/home/home";

let About=lazy(()=>import('../src/components/about/about'));
let Login=lazy(()=>import('../src/components/login/laogin'));

class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navigation/>
            <Suspense fallback={<div>LOADING.............</div>}>
              <Route path="/about" exact component={About}/>
              <Route path="/laogin" exact component={Login}/>
            </Suspense>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/home" exact component={Home}/>
            </Switch>
          </div>
        </div>
      </div>
      );
   }
};
export default App;
