import React, { Fragment } from "react";
import Encabezado from "./componentes/Encabezado";
import Api from "./api";
import ListadoProductos from "./componentes/ListadoProductos";
import CrearProducto from "./componentes/CrearProducto";
import SobreNosotros from "./componentes/SobreNosotros";
const URL = "http://localhost:8080/api/";

const api = new Api(URL);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.GuardarProducto = this.GuardarProducto.bind(this);
    this.BuscarProductoPorId = this.BuscarProductoPorId.bind(this);
  }
  state = {
    menuActivo: [
      "nav-link",
      "nav-link",
      "nav-link",
      "nav-link",
      "nav-link",
      "nav-link",
    ],
    producto: {
      id: "",
      descripcion: "",
      precio: "",
      fechaAlta: "",
      cantidad: "",
    },
    productos: [],
    GDisabled: true,
    BIDisabled: true,
    BDDisabled: true,
    RIDisabled: true,
    RDDisabled: true,
    SNisabled: true,
    error: "",
  };
  //API REST//
  //Listar productos
  async ListarProductos() {
    this.setState({
      menuActivo: [
        "nav-link active",
        "nav-link",
        "nav-link",
        "nav-link",
        "nav-link",
        "nav-link",
      ],
      GDisabled: true,
      BIDisabled: true,
      BDDisabled: true,
      RIDisabled: true,
      RDDisabled: true,
      SNisabled: true,
      error: "",
      producto: {
        id: "",
        descripcion: "",
        precio: "",
        fechaAlta: "",
        cantidad: "",
      },
    });
    try {
      let productos = await api.getall();
      this.setState({ productos: productos });
      console.log("Listado productos:");
    } catch (error) {
      console.log("Error al listar productos:");
    }
  }
  //Guardar productos
  async GuardarProducto(producto) {
    try {
      console.log(producto);
      producto = await api.post(producto);
      this.ListarProductos();
    } catch (error) {}
  }
  async EliminarProducto(id) {
    try {
      console.log("Eliminando producto..." + id);
      let producto = await api.get(id);
      if (producto != null) {
        console.log("Eliminando producto...{encontrado}:" + id);
        producto = await api.delete(id);
        console.log("Producto Eliminado..." + id);
        this.ListarProductos();
      } else {
        this.setState({ error: "Error al eliminar" });
      }
    } catch (error) {
      console.log("Error al eliminar producto..." + id);
    }
  }
  //Buscar Por ID
  async BuscarProductoPorId(id) {
    try {
      console.log("Buscando producto..." + id);
      let producto = await api.get(id);
      if (producto.id != null) {
        console.log("Producto encontrado...:" + id);
        console.log(producto);
        this.setState({ error: "" });
        this.setState({
          producto: producto,
          RIDisabled: false,
        });
      } else {
        this.setState({
          producto: producto,
          RIDisabled: true,
          producto: {
            id: "",
            descripcion: "",
            precio: "",
            fechaAlta: "",
            cantidad: "",
          },
        });
        console.log("NO Encontrado...:" + id);
        this.setState({ error: "Producto no encontrado" });
      }
    } catch (error) {
      console.log("Error al buscar producto..." + id);
    }
  }
  async BuscarProductoPorD(descripcion) {
    try {
      console.log("Buscando producto..." + descripcion);
      let productos = await api.getDesc(descripcion);
      if (productos.length > 0) {
        console.log("Producto encontrado...:" + descripcion);
        this.setState({
          productos: productos,
          error: "",
          RDDisabled: true,
          BDDisabled: true,
          menuActivo: [
            "nav-link active",
            "nav-link",
            "nav-link ",
            "nav-link",
            "nav-link",
          ],
        });
      } else {
        console.log("NO Encontrado...:" + descripcion);
        this.setState({
          producto: productos,
          RDDisabled: false,
          BDDisabled: false,
          producto: {
            id: "",
            descripcion: "",
            precio: "",
            fechaAlta: "",
            cantidad: "",
          },
        });
        this.setState({ error: "Producto no encontrado" });
      }
    } catch (error) {
      console.log("Error al buscar producto..." + descripcion);
    }
  }
  async BuscarPorId_Listar(id) {
    try {
      console.log("Buscando producto..." + id);
      let producto = await api.get(id);
      if (producto.id != null) {
        console.log("Producto encontrado...:" + id);
        console.log(producto);
        this.setState({
          menuActivo: [
            "nav-link",
            "nav-link",
            "nav-link active",
            "nav-link",
            "nav-link",
          ],
          GDisabled: true,
          BIDisabled: false,
          BDDisabled: true,
          RIDisabled: false,
          RDDisabled: true,
          SNisabled: true,
          error: "",
          producto: producto,
        });
      } else {
        this.setState({
          producto: producto,
          RIDisabled: true,
          producto: {
            id: "",
            descripcion: "",
            precio: "",
            fechaAlta: "",
            cantidad: "",
          },
        });
        console.log("NO Encontrado...:" + id);
      }
    } catch (error) {
      console.log("Error al buscar producto..." + id);
    }
  }
  FormularioProducto() {
    this.setState({
      menuActivo: [
        "nav-link",
        "nav-link active",
        "nav-link",
        "nav-link",
        "nav-link",
      ],
      GDisabled: false,
      BIDisabled: true,
      BDDisabled: true,
      RIDisabled: true,
      RDDisabled: true,
      SNisabled: true,
      error: "",
      producto: {
        id: "",
        descripcion: "",
        precio: "",
        fechaAlta: "",
        cantidad: "",
      },
    });
  }
  BuscarPorId() {
    this.setState({
      menuActivo: [
        "nav-link",
        "nav-link",
        "nav-link active",
        "nav-link",
        "nav-link",
      ],
      GDisabled: true,
      BIDisabled: false,
      BDDisabled: true,
      RIDisabled: true,
      RDDisabled: true,
      SNisabled: true,
      error: "",
      producto: {
        id: "",
        descripcion: "",
        precio: "",
        fechaAlta: "",
        cantidad: "",
      },
    });
  }

  BuscarPorDesc() {
    this.setState({
      menuActivo: [
        "nav-link",
        "nav-link",
        "nav-link",
        "nav-link active",
        "nav-link",
      ],
      GDisabled: true,
      BIDisabled: true,
      BDDisabled: false,
      RIDisabled: true,
      RDDisabled: true,
      SNisabled: true,
      error: "",
      producto: {
        id: "",
        descripcion: "",
        precio: "",
        fechaAlta: "",
        cantidad: "",
      },
    });
  }
  SobreNosotros() {
    this.setState({
      menuActivo: [
        "nav-link",
        "nav-link",
        "nav-link",
        "nav-link",
        "nav-link active",
      ],
      GDisabled: true,
      BIDisabled: true,
      BDDisabled: true,
      RIDisabled: true,
      RDDisabled: true,
      SNisabled: false,
      error: "",
    });
  }
  render() {
    return (
      <Fragment>
        <Encabezado
          menuActivo={this.state.menuActivo}
          ListarProductos={() => this.ListarProductos()}
          FormularioProducto={() => this.FormularioProducto()}
          BuscarPorId={() => this.BuscarPorId()}
          BuscarPorDesc={() => this.BuscarPorDesc()}
          SobreNosotros={() => this.SobreNosotros()}
        />
        {this.state.menuActivo[0] === "nav-link active" && (
          <ListadoProductos
            productos={this.state.productos}
            EliminarProducto={(id) => {
              this.EliminarProducto(id);
            }}
            BuscarPorId_Listar={(id) => {
              this.BuscarPorId_Listar(id);
            }}
          />
        )}
        {(!this.state.GDisabled ||
          !this.state.BIDisabled ||
          !this.state.BDDisabled) && (
          <CrearProducto
            GuardarProducto={(producto) => {
              this.GuardarProducto(producto);
            }}
            BuscarProductoPorId={(id) => {
              this.BuscarProductoPorId(id);
            }}
            BuscarProductoPorD={(descripcion) => {
              this.BuscarProductoPorD(descripcion);
            }}
            producto={this.state.producto}
            GDisabled={this.state.GDisabled}
            BIDisabled={this.state.BIDisabled}
            BDDisabled={this.state.BDDisabled}
            RIDisabled={this.state.RIDisabled}
            RDDisabled={this.state.RDDisabled}
            error={this.state.error}
          />
        )}
        {!this.state.SNisabled && <SobreNosotros />}
      </Fragment>
    );
  }
}
export default App;