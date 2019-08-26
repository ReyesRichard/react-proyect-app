import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from '../../containers/dashboard';
import Other from '../../containers/other';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBell, 
    faSortDown,
    faCircle,
} from '@fortawesome/free-solid-svg-icons'

class headerComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           
            <nav className="header">
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon className="dot-notify" icon={faCircle} />
                            <FontAwesomeIcon className="icon-bell"  icon={faBell} />
                        </span>
                        <Link to="/" >{this.props.user}</Link>
                        <FontAwesomeIcon icon={faSortDown} />
                    </li>
                    {/* <li>
                        <Link to="/other/" className="active">
                            Other
                        </Link>
                    </li> */}
                </ul>
            </nav>
        )
    }
}

export default headerComponent