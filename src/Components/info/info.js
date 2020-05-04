import React from 'react';
import hammock from '../images/hammock.PNG';
import 'bootstrap/dist/css/bootstrap.css';
import './info.css';
function Info() {
	return (
		<div className="infoIt">
			
			<div className="textalign">
				<h4>Admin</h4>
			</div>
			<div className="textalign">
				<h5></h5>
			</div>
			<table class="table table-borderless">
				<thead>
					<tr>
						<th>Domain</th>
						<th>Username</th>
						<th>Password</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Nikhil</th>
						<td>india</td>
						<td>12345</td>
					</tr>
					<tr>
						<th scope="row">Satya</th>
						<td>india</td>
						<td>12345</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
export default Info;
