import React, { Component } from 'react';

import SubMenu from '../submenu'
class menuItemComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() { 
        { return this.props.submenu.map((item, index)=>

            <li className={this.props.visible} key={index}>
                <a href={item.url}> {item.name}</a> 
                <ul >

                    <SubMenu submenu={item.submenu}/>
                </ul>
            </li>
        
        )}
    }
}
 
export default menuItemComponent;