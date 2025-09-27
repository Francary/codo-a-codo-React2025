const Tarjeta = ({ titulo, descripcion, textoBoton, onClickBoton }) => (
   <>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <button onClick={onClickBoton}>
            {textoBoton}
        </button>
   
   </>
);

export {

    Tarjeta
} 