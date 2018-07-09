import React from 'react';
import CardList from './CardList';
import SerchBox from './SerchBox';
import { robots } from './robots';
import './App.css';


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}) ;
		
	}
	render(){
		const filteredRobot = this.state.robots.filter(robots => {
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			}
		)
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SerchBox searchChange = {this.onSearchChange}/>
				<CardList robots={filteredRobot} />
			</div>
		);
	}
}

export default App;