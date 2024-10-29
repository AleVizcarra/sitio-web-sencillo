export default function Actividad({ titulo, descripcion }) {
    return (
        <div className="actividad">
            <h3 className="titulo-actividad">{titulo}</h3>
            <p className="descripcion-actividad">{descripcion}</p>
        </div>
    );
}
