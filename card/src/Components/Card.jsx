
import React, { useEffect } from 'react';
import M from 'materialize-css';
import Imagen from '../../Img/20230113.png'

const Card = () => {
    useEffect(() => {
      
      M.AutoInit();
    }, []);
  
    return (
      <div className="container m6">
        <div className="row">
         
          <div className="col s12 m6 offset-m3">
            <div className="card" style={{ maxWidth: '400px', margin: '0 auto'}}>
              <div className="card-image">
                <img
                  src={Imagen}
                  style={{maxWidth: '200p', maxHeight: '500px'}}
                />
                <h5 className="card-title black-text">Rony Javier Ramirez</h5>
              </div>
              <div className="card-content">
                <p>
                  <strong>Email:</strong> 20230113@ricaldone.edu.sv
                </p>
                <p>
                  <strong>Teléfono:</strong> +503 7989 1704
                </p>
                <p>
                  <strong>Dirección:</strong> San Salvador, El Salvador
                </p>
              </div>
              <div className="card-action">
                <h1>Gracias por visitar la Pagina</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Card