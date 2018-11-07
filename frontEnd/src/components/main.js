import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import calcHome from './login/calcHome';

class Main extends Component {
    render() {
        
        return(
            <div>
            <Route path="/" component={calcHome}/>
            <Route path="/calcHome" component={calcHome}/>
            </div>
        )
    }
}

export default Main;