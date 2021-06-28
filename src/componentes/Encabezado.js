import React , {Fragment} from "react";

function Encabezado(props) {


return(
   <Fragment>
       <h1>Bienvenido al catalogo de Cafe</h1>
            <nav>
              <a href="Add">Agregar Cafe | </a>
              <a href="update">Modificar Cafer | </a>
              <a href="delete">Borrar Cafe | </a>
              <a href="Check">Consultar Cafe </a>
            </nav>





   </Fragment>



);

}
export default Encabezado;