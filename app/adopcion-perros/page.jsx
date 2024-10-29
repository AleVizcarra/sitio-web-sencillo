import CartaInformacion from '@/components/CartaInformacion';
import data from '../data/perros.json';
import '../globals.css';

export default function AdopcionPerrosPage() {
    return (
        <section className="perros-en-adopcion">
            <h1 className="titulo-view">Perros en adopción</h1>
            <div className="informacion-adopcion contenedor-85">
                <p>Los perros que aquí aparecen, buscan un hogar permanente.</p>
                <p>
                    Si estás interesado en alguno, por favor llena el formulario
                    de adopción y nos pondremos en contacto contigo.
                </p>
            </div>

            <div className="contenedor-listado-animales">
                <ul id="listado-animales">
                    {/* Por cada objeto del arreglo data se generará un componente "CartaInformacion" con los datos correspondientes */}
                    {data.map((perro) => {
                        return (
                            <CartaInformacion
                                img={perro.img}
                                nombre={perro.nombre}
                                sexo={perro.sexo}
                                edad={perro.edad}
                                caracteristicas={perro.caracteristicas}
                                key={perro.nombre}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
