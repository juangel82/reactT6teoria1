import './MensajesHeader.component.css';

export default function MensajesHeader(props) {
  return (
    <div className="MensajesHeader">
      <button onClick={props.clickNuevo} className="Nuevo">Nuevo</button>
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
    </div> 
  );
}

/*no creamos un estado en este componente, pues el estado lo gestionará el controlador, Mensaje.*/