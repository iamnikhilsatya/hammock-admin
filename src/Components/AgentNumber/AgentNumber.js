import React, { Component } from 'react';
import './AgentNumbermin.css';
import hammock from '../images/hammock.PNG';
import { Link } from 'react-router-dom';
class AgentNumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            user: '',
            pass:'',
			list: []
		};
	}
	addItem(user,pass) {
		if (user !== '') {
			const newItem = {
				id: Date.now(),
                value: user,
                value2:pass
			};
			const list = [ ...this.state.list ];
			list.push(newItem);
			this.setState({
				list,
                user: '',
                pass:''
			});
		}
	}

	deleteItem(id) {
		const list = [ ...this.state.list ];
		const updatedList = list.filter((item) => item.id != id);
		this.setState({
			list: updatedList
		});
	}
 
	updateInput(event) {
		this.setState({
            user:event
		});
    }
    updateInput2(event) {
		this.setState({
            pass:event
		});
    }
    edit(id){
        const list = [ ...this.state.list ];
        const updatedList = this.state.list.find(item=>item.id===id)
        console.log()



    }

	render() {
		return (
    
			<div className="AgentIt">
        
			</div>
		);
	}
}

export default AgentNumber;
