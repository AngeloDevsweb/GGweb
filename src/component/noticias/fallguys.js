import React, { Component } from 'react'

export default class fallguys extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="title-noticia">Fall guys llegará para las plataformas Xbox One y Xbox Series X/S</h2>
                    <img src="/images/fallguys2.jpg" className="img-fluid tamaño-portadas" alt="Responsive image"/>
                    <div className="mt-4">
                        <p className="estilo-parrafos">Después que se anunciara en Nintendo switch, Mediatonic ha confirmado que el titulo estará disponible para las consolas de Microsoft.</p>
                        <p className="estilo-parrafos">Mediatonic tenía un objetivo muy claro y ese era lanzar Fall Guys: Ultimate Knockout en más plataformas y al fin lo ha conseguido. Luego de que anunciara el lanzamiento en Nintendo Switch el dia que se realizó el Nintendo Direct más reciente, ahora la desarrolladora ha revelado que el juego también se estrenara en consolas de Microsoft.</p>
                        <p className="estilo-parrafos">En el blog oficial de la plataforma Xbox Wire, Mediatonic se expresó de la siguiente manera: “Nuestro equipo está muy ansioso de poder darle la bienvenida a los jugadores de Xbox”. Se trata de un juego en el que los participantes deben competir entre sí en diferentes pruebas y solo uno se llevara la corona.</p>
                        <div className="padreRedimension"> 
                            <img src="/images/fallguysnintendo.jpg" className="redimension"  alt=""/>
                        </div>
                        <h3>Tienen novedades para un futuro</h3>
                        <p className="estilo-parrafos">A pesar de que el juego no es free-to-play funciona bajo un modelo de temporadas mediante el cual se añaden novedades periódicamente, actualmente en la nueva actualización se encuentra un modo que tiene mucho que ver con el invierno. Según Walsh el equipo de mediatonic está trabajando muy duro para traer las novedades que se vendrán al juego muy pronto.</p>
                        <p className="estilo-parrafos">Sobre las novedades no han querido revelar mucha información, pero si aseguran que habrá varios cambios, como ser:  diferentes atuendos, rondas peculiares, nuevas características y sobre todo mejoras.</p>
                        <p className="estilo-parrafos">¿La fecha? Pues mediatonic aún no ha confirmado una fecha de lanzamiento para las consolas de Microsoft pero aseguran que será para este verano.</p>
                    </div>
                    {/* otra seccion de cards */}
                    <h2 className="container mb-3 mt-5">Te puede interesar...</h2>
                <div className="container mb-3">
                    <div className="">
                    <div class="card-deck">
                        <div class="card">
                            <img src="/images/warzone2.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">COD Warzone y Cold War Presentan contenido de su nueva temporada</h5>
                            <p class="card-text">Te comentamos acerca del nuevo contenido mostrado en su reciente trailer de la temporada 2 que esta por llegar a COD.</p>
                            
                            </div>
                        </div>
                        <div class="card">
                            <img src="/images/fallguys.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Fall guys llegará para las plataformas Xbox One y Xbox Series X/S</h5>
                            <p class="card-text">Después de su anuncio en nintendo Switch, Mediatonic ha confirmado que el juego llegará a las plataformas de Microsoft para este verano.</p>
                            
                            </div>
                        </div>
                        <div class="card">
                            <img src="/images/doblexp.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Warzone y Cold War darán doble ficha de XP en pase de batalla </h5>
                            <p class="card-text">Como parte de su despedida a la primer temporada de COD regalarán puntos dobles de experiencia, te contamos la fecha y hora si es que aún no haz completado tu pase de batalla.</p>
                            
                            </div>
                        </div>
                </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
