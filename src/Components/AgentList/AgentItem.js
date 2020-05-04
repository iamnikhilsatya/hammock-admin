import React, { Component } from 'react';

export default class AgentItem extends Component {
	render() {
		const { title, pass, handleDelete, handleEdit } = this.props;
		return (
			<div>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Username</th>
							<th scope="col">Password</th>
							<th scope="col">Handle</th>
						</tr>
					</thead>
                    <tbody>
                    <tr>
			
                   
                      <th>#</th>
					<th>{title}</th>
					<th>{pass}</th>
                    <th>
					<div className="Agent-icon">
						<span className="mx-2 pr-2 text-success">
							<i className="fas fa-pen" onClick={handleEdit} />
						</span>
						<span className="mx-2 text-danger" onClick={handleDelete}>
							<i className="fas fa-trash" />
						</span>
					</div>
                    </th>
                   
                   
				
                </tr>
                </tbody>
                </table>
			</div>
		);
	}
}
