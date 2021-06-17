import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
export default function App() {
  let [nome, setNome] = useState(false);

  useEffect(() => {
    console.log(nome);
  }, [nome]);

  const usaApi = () => {
    axios
      .get("https://randomuser.me/api")
      .then((response) => {
        return response.data.results[0];
      })
      .then((user) => {
        setNome(user);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div align="center" className="col">
          <br />
          <button onClick={usaApi} className='btn btn-primary'><i class="fas fa-user" style={{marginRight: '7px'}}></i> Carregar Usuário! </button>
          <div id="userinfo">
            <br />
            {nome && (
              <>
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img className='card-image' src={nome.picture.large} alt="foto" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title"> {nome.name.first} {nome.name.last}</h5>
                        <p className="card-text">Email: {nome.email} <br /> Phone: {nome.phone} <br /> Age: {nome.dob.age} years old <br /> Country: {nome.location.country} </p>
                        <p className="card-text"><small class="text-muted">Registered Since: {new Date().getFullYear() - nome.registered.age}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
