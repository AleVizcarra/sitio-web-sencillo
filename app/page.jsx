import Actividad from '@/components/Actividad';
import Boton from '@/components/Boton';
import Link from 'next/link';
import './globals.css';
import './Home.css';

export default function HomePage() {
    return (
        <>
            <section className="hero-section">
                <h1 className="titulo-view">
                    Esperanza para los animales abandonados de Mazatlán
                </h1>
            </section>

            <section className="introduccion">
                <p>
                    Junto con el Santuario Animal la Esperanza, estamos salvando
                    las vidas de los animales más vulnerables de Mazatlán. Somos
                    una sociedad de voluntarios mexicanos, canadienses y
                    estadounidenses. Mazatlán Animal Rescue trabaja en la
                    comunidad para mejorar la vida de los animales.
                </p>
            </section>
            <section className="seccion-actividades">
                <div className="contenedor-texto-actividades">
                    <h2 className="subtitulo">Esto es lo que hacemos</h2>
                    <div className="actividades">
                        {/* Actividad 1 */}
                        <Actividad
                            titulo="Rescate"
                            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ex vitae justo ullamcorper ullamcorper. Donec vel odio eleifend, sodales."
                        />
                        {/* Actividad 2 */}
                        <Actividad
                            titulo="Rehabilitación"
                            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ex vitae justo ullamcorper ullamcorper. Donec vel odio eleifend, sodales."
                        />
                        {/* Actividad 3 */}
                        <Actividad
                            titulo="Reubicación"
                            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ex vitae justo ullamcorper ullamcorper. Donec vel odio eleifend, sodales."
                        />
                        {/* Actividad 4 */}
                        <Actividad
                            titulo="Recaudación de fondos"
                            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ex vitae justo ullamcorper ullamcorper. Donec vel odio eleifend, sodales."
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="contenedor-85 links-paginas-adopcion">
                    <div>
                        <h2>Encuentra a tu acompañante perfecto</h2>
                    </div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="/video.mp4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="contenedor-botones">
                        <Link href="/adopcion-perros">
                            <Boton texto="Adopta un perro" />
                        </Link>
                        <Link href="/adopcion-gatos">
                            <Boton texto="Adopta un gato" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
