import React from 'react';

function History(props) {

  return (
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
    </div>
  );
}

export default History;
