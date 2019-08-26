import React, { PureComponent } from 'react'
import Sidebar from '../../components/sidebar';
import TableBanners from '../../components/table';

class dashboardContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    position: "1",
                    status: "Activo",
                    statusTitle: "Activo",
                    name: "Regreso a clases",
                    publication:'https://via.placeholder.com/90x50',
                    page: "Landing",
                    date: "11/08/19-12:00"
                },
                {
                    position: "2",
                    status: "Vencido",
                    statusTitle: "Vencido",
                    name: "Hotsale",
                    publication:'https://via.placeholder.com/90x50',
                    page: "Landing",
                    date: "10/09/19-12:00"
                },
                {
                    position: "3",
                    status: "Procesado",
                    statusTitle: "1 dìa - 30 min",
                    name: "Celulares y Tecnología",
                    publication:'https://via.placeholder.com/90x50',
                    page: "Categoría",
                    date: "08/09/19-12:00"
                },
                {
                    position: "4",
                    status: "Activo",
                    statusTitle: "Activo",
                    name: "Samsung",
                    publication:'https://via.placeholder.com/90x50',
                    page: "Producto",
                    date: "08/11/19-12:00"
                },
                {
                    position: "5",
                    status: "Activo",
                    statusTitle: "Activo",
                    name: "Primavera - Verano",
                    publication:'https://via.placeholder.com/90x50',
                    page: "Comer",
                    date: "07/11/19-12:00"
                },

            ]
        }
    }

    render() {
        return (
            <div className="dashboard">
                <div className="col-3 sidebar-wrap">

                    <Sidebar/>
                </div>

                <div className="col-9 panel-wrap">
                    <div className="info">
                        <h1>Administración de app</h1>
                        <p>Lista de modulos editables en home</p>
                    </div>
                    <TableBanners data={this.state.data}/>   
                    <div className="buttons">
                        <button className="btn btn-primary">Editar</button>    
                        <button className="btn btn-secondary">Enviar a APP</button>    
                    </div> 
                </div>
            </div>  
        )
    }
}

export default dashboardContainer