import React,{Fragment} from "react";

function ListaProductos(props)
{ let { productos, EliminarProducto,BuscarporId_Listar } = props;
 return(
   <Fragment>
           <div className="card mt-5 mr-5"> 
           <div className="card-header">Listado de productos </div>
           <div className="card-body">
           <blockquote className="blockquote mb-0">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                <th scope="col">id</th>
                <th scope="col">tipo</th>
                <th scope="col">color</th>
                <th scope="col">fragancia</th>
                <th scope="col">region</th>
                <th scope="col">precio</th>
                </tr>
                </thead>
                <tbody>
                    {productos.map((producto ,key) => (
                        <tr key={key}>
                           <th scope="row">
                           <a href="*" className="badge badge-primary">{producto.id}</a></th>
                           <td>{producto.tipo}</td>
                           <td>{producto.color}</td> 
                           <td>{producto.fragancia}</td>
                           <td>{}</td>


                           

                        </tr>
                         
                    ))}
                
                </tbody>
                
                </table> 
        </blockquote>


           </div>

           </div>


   </Fragment>


 )




}