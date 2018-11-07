import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputNumber : "",
            outputNumber : "",
            operation: "",
        }
        this.inputNumberChangeHandler = this.inputNumberChangeHandler.bind(this);
        this.submitNumbers = this.submitNumbers.bind(this);
        this.operation = this.operation.bind(this);
    }
 
    operation = (e) => {
        this.setState({
            inputNumber: this.state.inputNumber.concat(e.target.value)
        })
    } 
    inputNumberChangeHandler = (e) => {
        this.setState({
            inputNumber : e.target.value
        })
    }
    
    submitNumbers = (e) => {
        var headers = new Headers();
        const data = {
            inputNumber: this.state.inputNumber
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        console.log(this.state.inputNumber);
        //make a post request with the user data
        axios.post('http://localhost:3001/calcHome',data)
            .then(response => {
               
                // console.log("Status Code : ",response.status);
                if(response.status === 200){
                    axios.get('http://localhost:3001/calcHome')
                .then((response) => {
                    console.log(response);
                    this.setState({
                        inputNumber : response.data
                    })
                 });
                }
            });
            console.log(this.state.inputNumber);

    }


    render() {
        return(
            <div>
            <div className="wrapper">
    <div className="form col-xs-5"> 
            <div className="form-group  col-sm-9">
              <label htmlFor="number">CALCULATOR:</label>
              <input onChange = {this.inputNumberChangeHandler} value = {this.state.inputNumber} type="text" className="form-control" placeholder="0" name="number"></input>
            </div>
            <div className="col-sm-12">
                <table className="calcTable">
                <tbody>
                <tr>
                <td><button onClick = {this.operation} value="+" className="btn-danger col-sm-12">+</button></td>
                <td><button onClick = {this.operation} value="-" className="btn-danger col-sm-12">-</button></td>
                <td><button onClick = {this.operation} value="/" className="btn-danger col-sm-12">/</button></td>
                <td><button onClick = {this.operation} className="" value="*" className="btn-danger col-xs-12">*</button></td>
                </tr>
                <tr>
                <td><button onClick = {this.operation} value="1" className="col-sm-12 btn-danger">1</button></td>
                <td><button onClick = {this.operation} value="2" className="col-sm-12 btn-danger">2</button></td>
                <td><button onClick = {this.operation} value="3" className="col-sm-12 btn-danger">3</button></td>
                <td><button onClick = {this.operation} value="4" className="col-sm-12 btn-danger">4</button></td>
                </tr>
                <tr>   
                <td><button onClick = {this.operation} value="5" className="col-sm-12 btn-danger">5</button></td>
                <td><button onClick = {this.operation} value="6" className="col-sm-12 btn-danger">6</button></td>
                <td><button onClick = {this.operation} value="7" className="col-sm-12 btn-danger">7</button></td>
                <td><button onClick = {this.operation} value="8" className="col-sm-12 btn-danger">8</button></td>
                </tr>
                <tr>
                <td><button onClick = {this.operation} value="9" className="col-sm-12 btn-danger">9</button></td>
                <td><button onClick = {this.operation} value="0" className="col-sm-12 btn-danger">0</button></td>
                <td><button onClick = {this.submitNumbers} type="submit" className="btn-danger col-sm-12">=</button></td>
                <td><button type = "reset" className="btn-danger col-sm-12">R</button></td>
                </tr>
               
                </tbody>
            </table> 
            </div>
            <div>
            
            </div>
</div>
</div>
</div>)
    }
}

export default Login;