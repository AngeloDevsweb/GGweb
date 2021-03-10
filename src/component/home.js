import React, { Component } from 'react'
import fortnite from '../images/fortnite.jpg'
import minecraft from '../images/minecraft2.jpg'
import warzone from '../images/warzone.jpg'
import noticia1 from '../images/noticia1.png'
import nuevasnapshot from '../images/nuevasnapshot.jpg'
import parche1540 from '../images/parche15.40.jpg'
import nochedecortos from '../images/nochedecortos.jpg'
import warzone2 from '../images/warzone2.jpg'
import fallguys from '../images/fallguys.jpg'
import doblexp from '../images/doblexp.jpg'

export default class home extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <div id="carouselExampleFade" className="carousel slide carousel-fade mb-5" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={fortnite} className="d-block tamaño-banner" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={minecraft} className="d-block tamaño-banner" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={warzone} className="d-block tamaño-banner" alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                    </div>
                <div className="container">
                    
                    {/* conjunto de cards */}
                    <h2 className="mb-3 text-center"> Noticias </h2>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <div className="card">
                                <img src={noticia1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Trailer de la nueva temporada de Warzone</h5>
                                    <p className="card-text">Hace muy poco que salio el nuevo trailer de lo que será la nueva temporada de warzone cold war y te contamos todo lo que sabemos acerca de ello.</p>
                                    <button className="btn btn-danger">
                                        <a href="" className="enlaces">Ver más</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* segundo card */}
                        <div className="col mb-4">
                            <div className="card">
                                <img src={nuevasnapshot} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Nueva Snapshot 21W07A de minecraft 1.17</h5>
                                    <p className="card-text">Acaba de salir la nueva snapshot de minecraft 1.17 y en esta version trae cambios que de seguro no te gustaran, dale click y enterate de lo nuevo.</p>
                                    <button className="btn btn-danger">
                                        <a href="" className="enlaces">Ver más</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* tercer card */}
                        <div className="col mb-4">
                            <div className="card">
                                <img src={parche1540} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Parche v15.40 Fornite</h5>
                                    <p className="card-text">Todos los cambios y novedades del nuevo parche que acaba de llegar a fortnite en esta actualización.</p>
                                    <button className="btn btn-danger">
                                        <a href="" className="enlaces">Ver más</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* cuarto card */}
                        <div className="col mb-4">
                            <div className="card">
                                <img src={nochedecortos} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Noche de cortos de Fortnite, fecha y horarios</h5>
                                    <p className="card-text mb-4">Un evento de fiesta magistral donde fortnite presentará cortos de animación, cuando y como verlo online.</p>
                                    <button className="btn btn-danger">
                                        <a href="" className="enlaces">Ver más</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* otra seccion de cards */}
                <h2 className="container mb-3">Publicaciones Recientes</h2>
                <div className="container mb-3">
                    <div className="">
                    <div class="card-deck">
                        <div class="card">
                            <img src={warzone2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">COD Warzone y Cold War Presentan contenido de su nueva temporada</h5>
                            <p class="card-text">Te comentamos acerca del nuevo contenido mostrado en su reciente trailer de la temporada 2 que esta por llegar a COD.</p>
                            
                            </div>
                        </div>
                        <div class="card">
                            <img src={fallguys} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Fall guys llegará para las plataformas Xbox One y Xbox Series X/S</h5>
                            <p class="card-text">Después de su anuncio en nintendo Switch, Mediatonic ha confirmado que el juego llegará a las plataformas de Microsoft para este verano.</p>
                            
                            </div>
                        </div>
                        <div class="card">
                            <img src={doblexp} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Warzone y Cold War darán doble ficha de XP en pase de batalla </h5>
                            <p class="card-text">Como parte de su despedida a la primer temporada de COD regalarán puntos dobles de experiencia, te contamos la fecha y hora si es que aún no haz completado tu pase de batalla.</p>
                            
                            </div>
                        </div>
                </div>
                    </div>
                </div>
                {/* pie de pagina */}
                
                <div className="piedepagina">
                    <footer className="text-white">Todos los derechos reservados</footer>
                </div>
            </div>
        )
    }
}
