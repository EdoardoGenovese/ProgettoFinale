import React from "react";

export default function Footer(){
    return(
        <div>
            <hr />
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-6">
                        <h5>Ti piace ciò che vedi? Condividilo!</h5>
                        <p>Inserimento social...</p>
                    </div>
                    <div className="col-6">
                        <h5>Iscriviti per sapere le novità!</h5>
                        <input type="text" className="form-control d-inline" placeholder="Inserisci la tua email..." required style={{width: "60%"}}></input>
                        <button className="btn btn-primary d-inline mb-1 pl-3">Iscriviti!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}