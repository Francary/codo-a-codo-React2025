const Clase03GaleriaIntereses = () => {
    const intereses = [
        {tecnologia:'React', color:'#0d1b2a'},
        {tecnologia:'JavaScript', color:'#0f4c5c'},
        {tecnologia:'APIs', color:'#540b0e'},
        {tecnologia:'Diseño UX', color:'#7f5539'},
        {tecnologia:'Node.js', color:'#5f0f40'},
        ];
    
  const handleClick = (color) => {
    document.body.style.backgroundColor = color;
  };
    return(
    <div style={{display:'flex', gap:'10px'}}>

        {intereses.map((interes, index) =>
        <button key={index}  onClick={() => handleClick(interes.color)}>{interes.tecnologia}</button>
    )}
    </div>
    )

}

export{
    Clase03GaleriaIntereses
}