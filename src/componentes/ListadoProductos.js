import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
function ListadoProductos(props){
    let { productos,EliminarProducto,BuscarPorId_Listar} = props;
   return(
    <Fragment>
             <div className="card mt-5 ml-5 mr-5">
        <div className="card-header">Listado de productos</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">fragancia</th>
                  <th scope="col">Precio $</th>
                  <th scope="col">Region</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto, key) => (
                  <tr key={key}>
                    <th scope="row"> 
                    <a href="#" className="badge badge-primary">{producto.id}</a></th>
                    <td>{producto.fragancia}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.region}</td>
                    <Button variant="primary">Primary</Button>
                    <Button 
                    label="Eliminar" 
                    
                    />
                     {/*  Eliminar
                    </Button > */}
                    <button
                      className="btn btn-success my-2 mr-3"
                      onClick={(e) => {BuscarPorId_Listar(producto.id)}}
                    >
                      Actualizar
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </blockquote>
        </div>
      </div>

        
    </Fragment>

   );

}
export default ListadoProductos