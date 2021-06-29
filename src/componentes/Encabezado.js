import React, { Fragment } from "react";
function Encabezado(props) {
  let {
    menuActivo,
    ListarProductos,
    FormularioProducto,
    BuscarPorId,
    BuscarPorDesc,
    SobreNosotros
  } = props;

  return (
    <Fragment>
      <nav className="">
        <ul className="nav nav-tabs bg-light nav-pills justify-content-center fixed-top">
          <li className="nav-item ">
            <a
              className={menuActivo[0]}
              href="#"
              onClick={() => {
                ListarProductos();
              }}
            >
              Listar producto
            </a>
          </li>
          <li className="nav-item">
            <a
              className={menuActivo[1]}
              href="#"
              onClick={() => {
                FormularioProducto();
              }}
            >
              Crear producto
            </a>
          </li>
          <li className="nav-item">
            <a
              className={menuActivo[2]}
              href="#"
              onClick={() => {
                BuscarPorId();
              }}
            >
              Buscar por Id
            </a>
          </li>
          <li className="nav-item">
            <a
              className={menuActivo[3]}
              href="#"
              onClick={() => {
                BuscarPorDesc();
              }}
            >
              Buscar por Descripcion
            </a>
          </li>
          <li className="nav-item">
            <a
              className={menuActivo[4]}
              href="#"
              onClick={() => { SobreNosotros();
                
              }}
            >
              Sobre nosotros
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
export default Encabezado;
