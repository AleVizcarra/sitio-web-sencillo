import './CartaInformacion.css';

export default function CartaInformacion({
    img,
    nombre,
    sexo,
    edad,
    caracteristicas,
}) {
    return (
        <li className="elemento-lista">
            <div className="card">
                <div className="contenedor-card-img">
                    <img className="card-img" src={img} alt={nombre} />
                </div>
                <div className="contenedor-card-info">
                    <div className="card-info">
                        <h3 className="card-nombre">{nombre}</h3>
                        <p className="card-sexo">{sexo}</p>
                    </div>
                    <div className="card-info-lista">
                        <div>
                            <img
                                className="icono-edad"
                                src="/icono-edad.svg"
                                alt="Icono edad"
                            />
                            <p>{edad}</p>
                        </div>
                        <div>
                            <img
                                src="/icono-caracteristicas.svg"
                                alt="Icono características"
                            />
                            <p>{caracteristicas}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
