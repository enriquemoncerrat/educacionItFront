import React, { Fragment } from "react";
function SobreNosotros() {
  const style = {
    width: "10rem",
  };
  return (
    <Fragment>
      <div className="mt-5 d-flex justify-content-center">
        <div className="card col mb-4" style={style}>
          <div className="card-body">
            <h5 className="card-title">Sobre nosotros</h5>
            <h6 className="card-subtitle mb-2 text-muted">Info</h6>
            <p className="card-text">
              Proyecto Integrador curso Education IT y Icebergsolutions
            </p>
            <p className="card-text">
              Alumno Felix Sirit
            </p>               
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default SobreNosotros;
