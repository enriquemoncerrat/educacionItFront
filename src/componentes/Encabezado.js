import React , {Fragment} from "react";

function Encabezado(props) {

let{
    menuactivo,
    ListarProductos,
//    EliminarProductos,
  //  ModificarProductos,
  //  CrearProductos,

}= props;


return(
   <Fragment>
      <nav className="">
            <ul className="nav nav-tabs bg-light nav-pills justiy-content-center fixed-top">
              <li className="nav-item">
                 <a
                    className={menuactivo}
                    href="#"
                    onClick={() =>{
                       ListarProductos();
                    }}
                    >Listar Productos</a>
              </li>
           </ul>   

      </nav>

      {/*  <h1>Bienvenido al catalogo de Cafe</h1>
            <nav>
              <a href="Add">Agregar Cafe | </a>
              <a href="update">Modificar Cafer | </a>
              <a href="delete">Borrar Cafe | </a>
              <a href="Check">Consultar Cafe </a>
            </nav> */}





   </Fragment>



);

}
export default Encabezado;