import './card.css';

export default function CardProp(props) {
    return (
        <div className="container py-5">
            <div className="card fondo" style={{ width: '18rem' }}>
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <button className="btn btn-primary">
                        Go somewhere
                    </button>
                </div>
            </div>
        </div>
    );
}