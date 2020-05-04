import React from 'react';
import './searchcartmin.css';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveImage from '../images/imagebackgroud.jpg';
import Header from '../header/header';
import hammock from '../images/hammock.PNG';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function searchcart() {
	return (
		<div>
		
			<div className="screenIt">
				
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
   
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
		  <Link
		  to="/agentapp"
		  >
		  <a className="nav-link"><h5>ADD AGENT</h5></a>
		  </Link>
       
      </li>
    </ul>
  </div>
</nav>
				<form>
					<div className="row">
						<div className="col" />
						<div className="col-5">
							<input
								type="text"
								name="searcheverything"
								id="searcheverything"
								className="form-control mb-3"
								placeholder="SEARCH EVERYTHING"
							/>
						</div>
					</div>
				</form>

				<div className="row">
					<div className="col">
						<h4>Displaying 1-100 to 235</h4>
					</div>
					<div className="col-2">
						<h4>1,2,3,4,5,....18</h4>
					</div>
				</div>
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th scope="col-1" className="username">
									#
								</th>
								<th scope="col-3" className="tasklist">
									#TASK LIST
								</th>
								<div className="d-inline">
									<th scope="col-1" className="ads">
										#ADS
									</th>
								</div>

								<th scope="col-1" className="expense">
									#EXPENSE
								</th>
								<th scope="col-2" className="status">
									#STATUS
								</th>
								<th scope="col-3" className="buttons" />
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">
									<p>Username</p>
								</th>
								<td>
									Bootstrap includes several predefined button styles, each serving its own semantic
									purpose, with a few extras thrown in for more control
								</td>
								<td>
									<p>15</p>
								</td>
								<td>
									<div>$3</div>
									<div>$5</div>
									<div>$3</div>
								</td>
								<td>
									<div>pending</div>
									<div></div>
									<div></div>
								</td>
								<td>
									<div className="d-flex">
										<Link to="/info">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PASSWORDS
											</button>
										</Link>

										<Link to="/search">
											{' '}
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PRODUCTS
											</button>
										</Link>

										<Link to="/previoustransaction">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PAYMENTS
											</button>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="table-responsive-md">
					<table className="table">
						<thead>
							<tr>
								<th scope="col-1" className="username">
									#
								</th>
								<th scope="col-3" className="tasklist">
									#TASK LIST
								</th>
								<div className="d-inline">
									<th scope="col-1" className="ads">
										#ADS
									</th>
								</div>

								<th scope="col-1" className="expense">
									#EXPENSE
								</th>
								<th scope="col-2" className="status">
									#STATUS
								</th>
								<th scope="col-3" className="buttons" />
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">
									<p>Username</p>
								</th>
								<td>
									Bootstrap includes several predefined button styles, each serving its own semantic
									purpose, with a few extras thrown in for more control
								</td>
								<td>
									<p>15</p>
								</td>
								<td>
									<div>$3</div>
									<div>$5</div>
									<div>$3</div>
								</td>
								<td>
									<div>pending</div>
									<div></div>
									<div></div>
								</td>
								<td>
									<div className="d-flex">
										<Link to="/info">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PASSWORDS
											</button>
										</Link>

										<Link to="/search">
											{' '}
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PRODUCTS
											</button>
										</Link>

										<Link to="/previoustransaction">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PAYMENTS
											</button>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="table-responsive-lg">
					<table className="table">
						<thead>
							<tr>
								<th scope="col-1" className="username">
									#
								</th>
								<th scope="col-3" className="tasklist">
									#TASK LIST
								</th>
								<div className="d-inline">
									<th scope="col-1" className="ads">
										#ADS
									</th>
								</div>

								<th scope="col-1" className="expense">
									#EXPENSE
								</th>
								<th scope="col-2" className="status">
									#STATUS
								</th>
								<th scope="col-3" className="buttons" />
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">
									<p>Username</p>
								</th>
								<td>
									Bootstrap includes several predefined button styles, each serving its own semantic
									purpose, with a few extras thrown in for more control
								</td>
								<td>
									<p>15</p>
								</td>
								<td>
									<div>$3</div>
									<div>$5</div>
									<div>$3</div>
								</td>
								<td>
									<div>pending</div>
									<div></div>
									<div></div>
								</td>
								<td>
									<div className="d-flex">
										<Link to="/info">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PASSWORDS
											</button>
										</Link>

										<Link to="/search">
											{' '}
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PRODUCTS
											</button>
										</Link>

										<Link to="/previoustransaction">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PAYMENTS
											</button>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="table-responsive-xl">
					<table className="table">
						<thead>
							<tr>
								<th scope="col-1" className="username">
									#
								</th>
								<th scope="col-3" className="tasklist">
									#TASK LIST
								</th>
								<div className="d-inline">
									<th scope="col-1" className="ads">
										#ADS
									</th>
								</div>

								<th scope="col-1" className="expense">
									#EXPENSE
								</th>
								<th scope="col-2" className="status">
									#STATUS
								</th>
								<th scope="col-3" className="buttons" />
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">
									<p>Username</p>
								</th>
								<td>
									Bootstrap includes several predefined button styles, each serving its own semantic
									purpose, with a few extras thrown in for more control
								</td>
								<td>
									<p>15</p>
								</td>
								<td>
									<div>$3</div>
									<div>$5</div>
									<div>$3</div>
								</td>
								<td>
									<div>pending</div>
									<div></div>
									<div></div>
								</td>
								<td>
									<div className="d-flex">
										<Link to="/info">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PASSWORDS
											</button>
										</Link>

										<Link to="/search">
											{' '}
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PRODUCTS
											</button>
										</Link>

										<Link to="/previoustransaction">
											<button
												type="button"
												className="btn btn-primary d-inline mr-3"
												id="styleIt"
											>
												VIEW PAYMENTS
											</button>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export default searchcart;
