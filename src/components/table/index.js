import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faCircle,


} from '@fortawesome/free-solid-svg-icons'

class tableComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="table-container">
                <p>Lista de banners en home</p>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Posición
                            </th>   
                            <th>
                                Status
                            </th>   
                            <th>
                                Nombre
                            </th>   
                            <th>
                                Publicidad
                            </th>   
                            <th>
                                Página
                            </th>   
                            <th>
                                Fecha / Hora
                            </th>   
                        </tr>   
                    </thead>   
                    <tbody>
                        {this.props.data.map((item, index)=>


                            <tr key={index}>
                                <td className="text-center">
                                    {item.position}
                                </td>   
                                <td>
                                    {{
                                        'Activo': <FontAwesomeIcon className="activo" icon={faCircle} /> ,
                                        'Vencido': <FontAwesomeIcon className="vencido" icon={faCircle} /> ,
                                        'Procesado': <FontAwesomeIcon className="proceso" icon={faCircle} /> ,
                                    }[item.status]}
                                    
                                    {item.statusTitle}
                                </td>   
                                <td >
                                     {item.name}
                                </td>   
                                <td className="text-center">
                                    <img src={item.publication} alt="Imagen publicacón" />
                                    
                                </td>   
                                <td>
                                    {item.page}
                                </td>   
                                <td className="text-center">
                                    {item.date}
                                </td>   
                            </tr>  
                        )}

                    </tbody>   
 
                </table>  
            </div> 
        )
    }
}

export default tableComponent