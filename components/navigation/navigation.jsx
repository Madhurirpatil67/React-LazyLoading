import React,{Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
             <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                 <Link className="navbar-brand" to="#">Navbar</Link>
                 <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                     aria-expanded="false" aria-label="Toggle navigation"></button>
                 <div className="collapse navbar-collapse" id="collapsibleNavId">
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                         <li className="nav-item active">
                             <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/about">About</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/laogin">Login</Link>
                         </li>
                     </ul>
                 </div>
               </nav>
            </div>
        </div>
        );
    }
};
export default Navigation;