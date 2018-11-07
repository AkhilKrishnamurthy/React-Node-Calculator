import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputNumber : "",
            password : "",
            authFlag : false
        }
        //Bind the handlers to this class
        this.inputNumberChangeHandler = this.inputNumberChangeHandler.bind(this);
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitNumbers = this.submitNumbers.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }
    inputNumberChangeHandler = (e) => {
        this.setState({
            inputNumber : e.target.value
        })
    }

    submitNumbers = (e) => {
        var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
       console.log("submit");
    }


    render() {
        return(
            <div>
                {/* {redirectVar} */}
            <div className="wrapper">
    <div className="form"> 
            {/* <div className="form-group col-lg-5">
              <label htmlFor="username">USERNAME</label>
              <input onChange = {this.usernameChangeHandler} type="text" className="form-control" placeholder="Enter username" name="username" required></input>
            </div>*/}
            <div className="form-group col-lg-5">
              <label htmlFor="number">CALCULATOR:</label>
              <input onChange = {this.inputNumberChangeHandler} type="text" className="form-control" placeholder="Enter number" name="number"></input>
            </div>
            <button onClick = {this.submitNumbers} type="submit" className="btn btn-primary">Submit</button> 
</div>
</div>
</div>)
    }
}

export default Login;