import React from "react";
import Table from 'react-bootstrap/Table';
import "./TableUser.css";

function TableUser(props) {



  if (props.datos) {
    return (
      <div className="res-height">
        <Table size="sm" striped bordered hover responsive className="table-res ">
          <thead className="table-color">
            <tr>
              <th>Concepto</th>
              <th>Plaza</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Saldo Restante</th>
            </tr>
          </thead>
          <tbody>

            {props.datos.map(mov => {
              return (<tr>{
                mov.map(ok => {
                  return (
                    <td>{ok}</td>
                  )
                })
              }</tr>)
            })}


          </tbody>
        </Table>
      </div>

    );
  } else if (props.datos === false) {
    return (
      <div className="res-height">
        <Table size="sm" striped bordered hover responsive className="table-res ">
          <thead className="table-color">
            <tr>
              <th>Concepto</th>
              <th>Plaza</th>
              <th>Fecha</th>
              <th>Saldo</th>
              <th>Saldo Final</th>
            </tr>
          </thead>
          <tbody>

            Sin datos...

          </tbody>
        </Table>
      </div>

    );
  } else {
    return (<div className="res-height">
      <Table size="sm" striped bordered hover responsive className="table-res ">
        <thead className="table-color">
          <tr>
            <th>Concepto</th>
            <th>Plaza</th>
            <th>Fecha</th>
            <th>Saldo</th>
            <th>Saldo Final</th>
          </tr>
        </thead>
        <tbody>
          Sin datos...
      </tbody>
      </Table>
    </div>)
  }


}
export default TableUser;