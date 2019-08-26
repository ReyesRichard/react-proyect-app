import React, { PureComponent } from 'react'

import Category from '../category'

class sidebarComponents extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            menu:[
                {
                    name: 'home',
                    url: "#",
                    icon: 'faHome',
                    submenu: [
                        {
                            name: "Acerca de",
                            url: "#",
                            submenu: [
                            ]
                        },
                        {
                            name: "Información",
                            url: "#",
                            submenu: [
                            ]
                        },
                    ]
                },
                {
                    name: 'Canales de Venta',
                    url: "#",
                    icon:"faShoppingCart",
                    submenu: [
                        {
                            name: "Tienda",
                            url: "#",
                            submenu: [
                                {
                                    name:"WEP",
                                    url: "#",
                                },
                                {
                                    name: "APP",
                                    url: "#",
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Productos',
                    url: "#",
                    icon: "faTag",
                    submenu: [
                        {
                            name:'Nuevos',
                            url:'#',
                            submenu: []
                        },
                        {
                            name:'Todos',
                            url:'#',
                            submenu: []
                        },
                        {
                            name:'Promociones',
                            url:'#',
                            submenu: []
                        },
                    ]
                },
                {
                    name:"ADD'S",
                    url: "#",
                    icon: "faBullhorn",
                    submenu: [

                    ]
                },
                {
                    name:"Transacciones",
                    url: "#",
                    icon: "faCreditCard",
                    submenu: [

                    ]
                },
                {
                    name:"Pedidos",
                    url: "#",
                    icon: "faStore",
                    submenu: [
                        {
                            name:'Nuevos',
                            url:'#',
                            submenu: []
                        },
                        {
                            name:'Todos',
                            url:'#',
                            submenu: []
                        },
                        {
                            name:'Anteriores',
                            url:'#',
                            submenu: []
                        },
                    ]
                },
                {
                    name:"Envios",
                    url: "#",
                    icon: "faPaperPlane",
                    submenu: [

                    ]
                },
                {
                    name:"Reporteria",
                    url: "#",
                    icon: "faChartBar",
                    submenu: [

                    ]
                },
                {
                    name:"Politicas",
                    url: "#",
                    icon: "faHaykal",
                    submenu: [

                    ]
                },
            ]
        }
    }

    render() {
        return (
            <div className="sidebar">
                {
                    this.state.menu.map( (item, index)=>
                        <Category menu={item} /> 
                    ) 
                }
            </div>   
        )
    }
}

export default sidebarComponents