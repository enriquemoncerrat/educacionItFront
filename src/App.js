//import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Encabezado from "./componentes/Encabezado";
import ListadoProductos from "./componentes/ListadoProducto";
import Api from "./api";
import { render } from '@testing-library/react';
//hacer un metodo que reciba del back los cafes 
// listar productos tiene q reciubir los cafes
const  URL = "http://localhost:8080";
const api = new Api(URL);
class App extends React.Component{

    constructor(props) {
      super(props);


    }
    state = {
     menuActivo:[
        "nav-link",


     ],
     producto: {
        id:"",
        tipo:"",
        color:"",
        fragancia:"",
        region:"",
        precio:""
     },
     productos:[],


     };



   async ListadoProductos(){

       this.setState({
         menuActivo:[
           "nav-link active"
         ],
         producto: {
          id:"",
          tipo:"",
          color:"",
          fragancia:"",
          region:"",
          precio:""
       },
      });
try{
       let productos = await api.getAll();
       this.setState({productos: productos});
       console.log("listando.. productos");
       }catch (error) {

        console.log("error al listar productos")
       }

    } 

    
render() {
  return(
  <Fragment>
      <Encabezado
      />
      <ListadoProductos
         productos={this.state.productos}
   />

    </Fragment>
  );
}

}

export default App;
