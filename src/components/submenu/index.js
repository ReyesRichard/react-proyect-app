import React, { Component } from 'react';
 
class  subMenuComponent extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        { return this.props.submenu.map((item, index)=>
            <li key={index}>
                <a href={item.url} className={item.name === 'APP' ?"active":""}>{item.name}</a> 
            </li>
        )}

    }
}
 
export default subMenuComponent ;