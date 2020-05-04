import React, { Component } from 'react';

export default class AgentInput extends Component {
	render() {
        const {item,pass,handleChange1,handleChange,handleSubmit,editItem}=this.props
        const lengthIt=item.length
		return (
			<div>
				
                <form onSubmit={handleSubmit}>
				  <section class="h-100">
            <div class="container h-100">
              <div class="row justify-content-md-center h-100">
                <div class="card-wrapper">
                  <div class="card fat custom-card-margin">
                    <div class="card-body">
                  
                      <form className="mt-4">
                        <div class="form-group">
                        <h5 className="text-capitalize text-center">ADD AGENT</h5>
                        <div className="text-center">-------------------------------</div>
                          {/* <label for="number">Mobile no.</label> */}
                          <label for="username">USERNAME:</label>
                          <input
                            id="username"
                            type="text"
                            class="form-control"
                            name="email"
                            placeholder="Email"
                            required
                            autofocus
                            value={item}
                    onChange={handleChange}
                          />
                        </div>

                        <div class="form-group">
                          {/* <label for="password">Password</label> */}
                          <label for="pasword">PASSWORD:</label>
                          <input
                            id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            required
                            value={pass}
                            onChange={handleChange1}
                          />
                        </div>

                        <button type="submit" 
                 
                    className={
                        editItem ? 
                        "btn btn-block btn-success mt-3":
                        "btn btn-block btn-primary mt-3"

                    }>
                        {editItem ?'Edit':'Add'}
                        
                    
                        </button>
                      </form>
                     
                     

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </form>
			</div>
		);
	}
}
