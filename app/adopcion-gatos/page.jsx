import CartaInformacion from '@/components/CartaInformacion';
import data from '../data/gatos.json';
import '../globals.css';

export default function AdopcionGatosPage() {
    return (
        <section className="gatos-en-adopcion">
            <h1 className="titulo-view">Gatos en adopción</h1>
            <div className="informacion-adopcion contenedor-85">
                <p>Los gatos que aquí aparecen, buscan un hogar permanente.</p>
                <p>
                    Si estás interesado en alguno, por favor llena el formulario
                    de adopción y nos pondremos en contacto contigo.
                </p>
            </div>

            <div className="contenedor-listado-animales">
                <ul id="listado-animales">
                    {/* Por cada objeto del arreglo data se generará un componente "CartaInformacion" con los datos correspondientes */}
                    {data.map((gato) => {
                        return (
                            <CartaInformacion
                                img={gato.img}
                                nombre={gato.nombre}
                                sexo={gato.sexo}
                                edad={gato.edad}
                                caracteristicas={gato.caracteristicas}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
