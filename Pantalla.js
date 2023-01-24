import React from "react";
import '../estilos/Pantalla.css'
/* una forma alternativa de definir los componentes
sin hacerlo con la funcion como siempre es con const 
y una funcion flecha*/

const Pantalla= ({input})=>(
    <div className="input">
        {input}
    </div>
);

export default Pantalla;