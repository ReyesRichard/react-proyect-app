import React, { Component } from 'react';

import MenuItem from '../menuItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faHome,
   faShoppingCart,
   faTag,
   faBullhorn,
   faCreditCard,
   faStore,
   faPaperPlane,
   faChartBar,
   faHaykal

} from '@fortawesome/free-solid-svg-icons'
 
class categoryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
    }

    handleClick( e ){
        e.preventDefault();
        this.setState(
            {
                visible: !this.state.visible,
            }
        )
    }
    render() { 
        return (
            <ul className="sidebar-menu">
                {/* {this.props.menu.map((item, index)=> */}
                    <li>
                        <a href="#" onClick={this.handleClick.bind(this)}> 
                            {{
                                'faHome': <FontAwesomeIcon className="activo" icon={faHome} /> ,
                                'faShoppingCart': <FontAwesomeIcon icon={ faShoppingCart} />,
                                'faTag': <FontAwesomeIcon icon={ faTag} />,
                                'faBullhorn': <FontAwesomeIcon icon={ faBullhorn} />,
                                'faCreditCard': <FontAwesomeIcon icon={ faCreditCard} />,
                                'faStore': <FontAwesomeIcon icon={ faStore} />,
                                'faPaperPlane': <FontAwesomeIcon icon={ faPaperPlane} />,
                                'faChartBar': <FontAwesomeIcon icon={ faChartBar} />,
                                'faHaykal': <FontAwesomeIcon icon={ faHaykal} />,
                            }[this.props.menu.icon]}
                            {this.props.menu.name} 
                        </a>
                        <ul > 
                            <MenuItem visible={this.state.visible ? 'show' : 'hide'} submenu={this.props.menu.submenu}/>
                        </ul>
                    </li>   
                {/* )} */}
            </ul>
        );
    }
}
 
export default categoryComponent;