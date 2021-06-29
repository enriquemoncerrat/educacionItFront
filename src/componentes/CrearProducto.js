import React, { Fragment } from "react";
import { render } from "@testing-library/react";
class CrearProducto extends React.Component {
  constructor(props) {
    super(props);
    this.GuardarValores = this.GuardarValores.bind(this);
    this.BuscarId = this.BuscarId.bind(this);
    this.BuscarD = this.BuscarD.bind(this);
  }
  state = {
    producto: {
      id: this.props.producto.id,
      descripcion: this.props.producto.descripcion,
      precio: this.props.producto.precio,
      fechaAlta: this.props.producto.fechaAlta,
      cantidad: this.props.producto.cantidad,
    },
    GDisabled: this.props.GDisabled,
    BIDisabled: this.props.BIDisabled,
    BDDisabled: this.props.BDDisabled,
    RIDisabled: this.props.RIDisabled,
    RDDisabled: this.props.RDDisabled,
    error:this.props.error
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      producto: {
        id: nextProps.producto.id,
        descripcion: nextProps.producto.descripcion,
        precio: nextProps.producto.precio,
        fechaAlta: nextProps.producto.fechaAlta,
        cantidad: nextProps.producto.cantidad,
      },
      GDisabled: nextProps.GDisabled,
      BIDisabled: nextProps.BIDisabled,
      BDDisabled: nextProps.BDDisabled,
      RIDisabled: nextProps.RIDisabled,
      RDDisabled: nextProps.RDDisabled,
      error:nextProps.error
    });
  }
  GuardarValores(e) {
    e.preventDefault();
    this.props.GuardarProducto(this.state.producto);
    this.setState({
      producto: {
        id: "",
        descripcion: "",
        precio: "",
        fechaAlta: "",
        cantidad: "",
      },
    });
  }
  BuscarId(e) {
    e.preventDefault();
    this.props.BuscarProductoPorId(this.state.producto.id);
  }
  BuscarD(e) {
    e.preventDefault();
    this.props.BuscarProductoPorD(this.state.producto.descripcion);
  }
  ButtonDisable() {
    let { id, descripcion, precio, cantidad } = this.state.producto;
    return (
      descripcion.length === 0 || precio.length === 0 || cantidad.length === 0
    );
  }
  ButtonDisableBuscarId() {
    let { id } = this.state.producto;
    return id.length === 0;
  }
  ButtonDisableBuscarD() {
    let { descripcion } = this.state.producto;
    return descripcion.length === 0;
  }
  render() {
    let { id, descripcion, precio, cantidad, fechaAlta } = this.state.producto;
    let {
      GDisabled,
      BIDisabled,
      BDDisabled,
      RIDisabled,
      RDDisabled,
    } = this.state;
    return (
      <Fragment>
        <div className="card mt-5 ml-5 mr-5">
          {!GDisabled && (
            <div className="card-header">Creacion de Producto</div>
          )}
          {!BIDisabled && <div className="card-header">Buscar por ID</div>}
          {!BDDisabled && (
            <div className="card-header">Buscar por Descripcion</div>
          )}
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              {this.state.error.length > 0 && (
                <div className="alert alert-danger mt-10" role="alert">
                  {this.state.error}
                </div>
              )}
              <form>
                {!BIDisabled && (
                  <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input
                      type="number"
                      className="form-control"
                      id="id"
                      value={id}
                      onChange={(e) => {
                        this.setState({
                          producto: {
                            ...this.state.producto,
                            id: e.target.value,
                          },
                        });
                      }}
                    />
                    <small className="form-text text-muted">
                      Buscar por Id
                    </small>
                  </div>
                )}
                {(BIDisabled || !BDDisabled || !RIDisabled) && (
                  <div className="form-group">
                    <label htmlFor="descripcion">Descripcion</label>
                    <input
                      type="text"
                      className="form-control"
                      id="descripcion"
                      value={descripcion}
                      onChange={(e) => {
                        this.setState({
                          producto: {
                            ...this.state.producto,
                            descripcion: e.target.value,
                          },
                        });
                      }}
                    />
                    <small className="form-text text-muted">
                      Nombre corto del producto
                    </small>
                  </div>
                )}
                {((BIDisabled && BDDisabled) || !RIDisabled) && (
                  <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      id="precio"
                      value={precio}
                      onChange={(e) => {
                        this.setState({
                          producto: {
                            ...this.state.producto,
                            precio: e.target.value,
                          },
                        });
                      }}
                    />
                    <small className="form-text text-muted">
                      Precio en pesos
                    </small>
                  </div>
                )}
                {((BIDisabled && BDDisabled) || !RIDisabled) && (
                  <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cantidad"
                      value={cantidad}
                      onChange={(e) => {
                        this.setState({
                          producto: {
                            ...this.state.producto,
                            cantidad: e.target.value,
                          },
                        });
                      }}
                    />
                    <small className="form-text text-muted">
                      Debe ser valor entero
                    </small>
                  </div>
                )}
                {!RIDisabled && (
                  <div className="form-group">
                    <label htmlFor="cantidad">Fecha de creacion</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cantidad"
                      value={fechaAlta}
                      disabled
                    />
                  </div>
                )}

                {!GDisabled && (
                  <button
                    className="btn btn-primary"
                    onClick={(e) => this.GuardarValores(e)}
                    disabled={this.ButtonDisable()}
                  >
                    Guardar
                  </button>
                )}
                {!BIDisabled && (
                  <button
                    className="btn btn-success"
                    onClick={(e) => this.BuscarId(e)}
                    disabled={this.ButtonDisableBuscarId()}
                  >
                    Buscar
                  </button>
                )}
                {!RIDisabled && (
                  <button
                    className="btn btn-primary m-1"
                    onClick={(e) => this.GuardarValores(e)}
                    disabled={this.ButtonDisableBuscarId()}
                  >
                    Actualizar
                  </button>
                )}
                {!BDDisabled && (
                  <button
                    className="btn btn-success"
                    onClick={(e) => this.BuscarD(e)}
                    disabled={this.ButtonDisableBuscarD()}
                  >
                    Buscar
                  </button>
                )}
              </form>
            </blockquote>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CrearProducto;
