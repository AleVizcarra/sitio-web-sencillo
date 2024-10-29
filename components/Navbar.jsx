import Link from 'next/link';
import '../app/globals.css';
import './Navbar.css';

export default function Navbar() {
    return (
        <header>
            <nav>
                <Link id="home-link" href="/">
                    <div className="contenedor-logo">
                        <img
                            src="/logo-animal-rescue.png"
                            alt="Logo Animal Rescue"
                            id="logo-img"
                        />
                        <h3 className="logo-text">
                            Animal <span>Rescue</span>
                        </h3>
                    </div>
                </Link>
                <div className="menu">
                    <Link href="/adopcion-perros">Perros en Adopción</Link>
                    <Link href="/adopcion-gatos">Gatos en Adopción</Link>
                </div>
            </nav>
        </header>
    );
}
