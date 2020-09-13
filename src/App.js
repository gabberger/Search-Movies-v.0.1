import React, {Component} from 'react';
import List from './containers/List';
import Navbar from './components/Navbar';


export default class App extends Component{

  render(){
    return <div>
        <Navbar />
        <List />
      </div>
  }
} 
