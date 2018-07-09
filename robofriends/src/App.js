import React from 'react';
import CardList from './CardList';
import SerchBox from './SerchBox';
import './App.css';
import Scroll from './Scroll';


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}) ;
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
  		.then(users => this.setState({robots: users}));
		
	}
	render(){
		const filteredRobot = this.state.robots.filter(robots => {
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			}
		)
		if (this.state.robots.length == 0) {
			return <h1>Loading</h1>
		}else{
			return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SerchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobot} />
				</Scroll>
			</div>
		);
		}
		
	}
}

export default App;