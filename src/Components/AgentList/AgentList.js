import React, { Component } from 'react';
import AgentItem from './AgentItem';

export default class AgentList extends Component {
	render() {
        const {items,handleDelete,handleEdit}=this.props 
		return (
			<div>
				<ul className="list-group my-5">
					<h5 className="text-capitalize text-center"> AGENT LIST</h5>

                    {
                        items.map(item=>{
                            return(
                                <AgentItem key={item.id}
                                 title={item.title}
                                 pass={item.pass}
                                 handleDelete={()=>handleDelete(item.id)  }
                                handleEdit={()=>handleEdit(item.id)}
                              
                                 />
                            )
                        })
                    }
                    

                  


				</ul>
			</div>
		);
	}
}
