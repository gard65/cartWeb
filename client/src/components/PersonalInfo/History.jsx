import React, { useEffect } from 'react';
import { Table} from "react-bootstrap"
import axios from 'axios';
import { useSelector } from 'react-redux';
import './history.css'
function History(props) {
  const [history, setHistory] = React.useState([])
 
  const user = useSelector(s => s.user)
  
  useEffect (async()=>{
    if (user?.id){
      const res = await axios.get(`http://localhost:3001/route/history/${user.id}`)
    setHistory(res.data)
    }

  }, [user])



  return (

<>


      
    <div className='col-md-4 col-md-offset-4' >

    <div className="container my-5 ">

    <h2 className="my-5">История поездок</h2>
      <div className="d-grid gap-2 ">
        <table className="table table-striped">
          <thead className="table-primary ">
             

            <tr>
              
              <th scope="col" className='col-1'>Маршрут (Начало)</th>
              <th scope="col" className='col1'>Маршрут (Конец)</th>
              <th scope="col" className='col1'>Дата Поездки</th>

            </tr>
              
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    <Table >
  <thead>
  {
    history && history.map(el =>
    <tr>
      
      <th>{el.Route?.pointA}</th>
      <th>{el.Route?.pointB}</th>
      <th>{el.Route?.date.slice(0,10)}</th>
      {/* <th>{el.User?.name}</th> */}

    </tr>
    )}
  </thead>
  <tbody>
    
    
  </tbody>
  </Table>
    </div>

    </div>
  
</>
   
  );
}

export default History;
