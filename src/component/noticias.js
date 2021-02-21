import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class noticias extends Component {
    render() {
        return (
            <div>
                {/* lista de las noticias */}
                <div className="container">
                    <h2 className="text-center mt-5 mb-5">NOTICIAS</h2>
                    <div className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/images/fallguys.jpg" className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <Link className="card-title titulo-noticias" to="/fallguysMicrosoft">
                                        Fall guys llegará para las plataformas Xbox One y Xbox Series X/S
                                    </Link>
                                    <p className="card-text">Después de su anuncio en nintendo Switch, Mediatonic ha confirmado que el juego llegará a las plataformas de Microsoft para este verano.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                    </div>
                    {/* segundo card */}
                    <div className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/images/doblexp.jpg" className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <Link className="card-title titulo-noticias" to="/doblexpWarzone">
                                        Warzone y Cold War darán doble ficha de XP en pase de batalla
                                    </Link>
                                    <p className="card-text">Como parte de su despedida a la primer temporada de COD regalarán puntos dobles de experiencia, te contamos la fecha y hora si es que aún no haz completado tu pase de batalla.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                    </div>
                    {/* tercer card */}
                    <div className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/images/warzone2.jpg" className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <Link className="card-title titulo-noticias" to="/temporada2">
                                        COD Warzone y Cold War Presentan contenido de su nueva temporada
                                    </Link>
                                    <p className="card-text">Te comentamos acerca del nuevo contenido mostrado en su reciente trailer de la temporada 2 que esta por llegar a COD.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                    </div>
                    {/* cuarto card */}

                </div>
            </div>
        )
    }
}
