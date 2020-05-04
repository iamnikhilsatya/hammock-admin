import React, { Component } from 'react';
import AgentList from './AgentList';
import AgentInput from './AgentInput';
import './AgentAppmin.css';
import uuid from 'uuid';
import hammock from '../images/hammock.PNG';

export default class AgentApp extends Component {
	state = {
		items: [],
		id: uuid(),
		item: '',
		pass: '',
		editItem: false
	};
	handleChange = (e) => {
		this.setState({
			item: e.target.value
		});
	};
	handleChange1 = (e) => {
		this.setState({
			pass: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			pass: this.state.pass
		};

		const updatedItems = [ ...this.state.items, newItem ];
		this.setState({
			items: updatedItems,
			item: '',
			pass: '',
			id: uuid(),
			editItem: false
		});
	};
	handleDelete = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};
	handleEdit = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		const selectedItem = this.state.items.find((item) => item.id === id);
		this.setState({
			items: filteredItems,
			item: selectedItem.title,
			pass: selectedItem.pass,
			editItem: true,
			id: id
		});
	};
	render() {
		return (
			<div className="AgentAppIt">
				
				<div className="row">
					<div className="col mt-5">
					
						<AgentInput
							item={this.state.item}
							pass={this.state.pass}
							handleChange1={this.handleChange1}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
					</div>
					<div className="col">
						<AgentList
							items={this.state.items}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}
