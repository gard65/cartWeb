import React from 'react';
import { Table} from "react-bootstrap"

function History(props) {
  return (

<>

      
    <div className='col-md-4 col-md-offset-4' >

    <div className="container my-5">

    <h2 className="my-5">История поездок</h2>
      <div className="d-grid gap-2">
        <table className="table table-striped">
          <thead className="table-primary">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Маршрут (Начало)</th>
              <th scope="col">Маршрут (Конец)</th>
              <th scope="col">Дата Поездки</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    <Table >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>

    </div>
  
</>
   
  );
}

export default History;
