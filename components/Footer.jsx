import { Span } from 'next/dist/trace';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="contenedor-footer">
                <p>
                    <span>Curso: </span>Conceptualización de servicios en la
                    nube
                </p>
                <p>
                    <span>Alumna: </span>Alejandra Vizcarra Peña
                </p>
                <p>
                    <span>Código de estudiante: </span>222959085
                </p>
                <p>
                    <span>Correo: </span>alejandra.vizcarra@udgvirtual.udg.mx
                </p>
            </div>
            <div className="contenedor-footer">
                <ul className="lista-links-rs">
                    <li className="link-rs">
                        <a
                            href="https://www.facebook.com/?locale=es_LA"
                            target="_blank"
                        >
                            <img
                                src="/icono-facebook.svg"
                                alt="Ícono Facebook"
                            />
                        </a>
                    </li>
                    <li className="link-rs">
                        <a href="https://twitter.com/?lang=es" target="_blank">
                            <img src="/icono-x.svg" alt="Ícono X" />
                        </a>
                    </li>
                    <li className="link-rs">
                        <a href="https://www.instagram.com/" target="_blank">
                            <img
                                src="/icono-instagram.svg"
                                alt="Ícono Instagram"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
