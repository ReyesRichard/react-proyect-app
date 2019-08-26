import React, { PureComponent } from 'react'

import Breadcrumb from '../breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons'


class footerComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    name: 'SSS'
                },
                {
                    name: 'Canales de venta'
                },
                {
                    name: 'Tienda'
                },
                {
                    name: 'App'
                },
                {
                    name: 'Banners'
                },
            ]
        }
    }

    render() {
        return (
            <div className="footer-container"> 
                
                <div className="arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>   
                <Breadcrumb data={ this.state.data}/>

            </div>   
        )
    }
}

export default footerComponent