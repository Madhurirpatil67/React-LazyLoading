import React,{Component} from "react";

class About extends Component{
    constructor(){
        super();
        this.state={
            heading:"About Section"
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{this.state.heading}</h1>
                    </div>
                </div>
            </div>
        );
    }
};
export default About;