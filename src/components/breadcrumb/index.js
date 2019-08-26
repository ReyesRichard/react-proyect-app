import React, { Component } from 'react';
 
class breadcrumbComponent extends Component {
    render() { 
        return (
            <ul className="breadcrumb">
                {this.props.data.map((item, index)=>
                    <li key={index}>
                        {item.name}
                    </li>  
                )}

            </ul>
            
        );
    }
}
 
export default breadcrumbComponent;