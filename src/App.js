import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';
import './App.css'


class App extends Component {
  constructor(){
  	super()
  	this.state = {
  		robots: [],
	    searhfield: ''
  	}
  }

  componentDidMount(){
  	fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response=>response.json())
  		.then(users => this.setState({ robots: users}))
  }


  onSearchChange = (event) => {
  	this.setState({ searhfield: event.target.value})
  }

    render() {
      const filteredRobots = this.state.robots.filter(robot=>{
  		 return robot.name.toLowerCase().includes(this.state.searhfield.toLowerCase());
  	})
	 return (
		<div className= 'tc'>	
		  <h1 class name= 'f1'> Robofriends </h1>
		  <SearchBox searchChange={this.onSearchChange}/>
		  <Scroll>	
		    <CardList robots={filteredRobots} />
		  </Scroll>
		</div>  

	 );
   }
}
	

export default App;