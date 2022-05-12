import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItineraryAction } from "../../redux/actions/addItineraryActions";
import { addItineraryFromDb, sendDateAndTime, THUNK_getRoutesFromDB } from "../../redux/thuncs/asyncAction";
import { useNavigate } from "react-router-dom";
import { postDateDepartAction } from "../../redux/actions/postDateDepartAction";
import { postTimeDepartAction } from "../../redux/actions/postTimeDepartAction";
import { Button } from "react-bootstrap";

function AddItinerary() {
  const [valueWhence, setValueWhence] = useState();
  const [whereValue, setWhereValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [timeValue, setTimeValue] = useState();
  const {id, isDriver} = useSelector(state => state.user)
  const routes = useSelector(state => state.routes)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function inputWhence(e) {
    setValueWhence(e.target.value);
  }
    function inputWhere(e) {
      setWhereValue(e.target.value);
    }
  function dateDeparture(e) {
    setDateValue(e.target.value)
  }
  function timeDeparture(e) {
    setTimeValue(e.target.value)
  }

  function sendValue(e) {
    e.preventDefault();
    setValueWhence("");
    setWhereValue("");
    dispatch(addItineraryAction(valueWhence, whereValue));
    dispatch(addItineraryFromDb(valueWhence, whereValue));
    dispatch(postDateDepartAction(dateValue));
    dispatch(postTimeDepartAction(timeValue)); 
    dispatch(sendDateAndTime(dateValue, timeValue, valueWhence, whereValue, id, isDriver));
    navigate("/mapRouter");
  }
useEffect (() => {
  dispatch(THUNK_getRoutesFromDB(isDriver))
  console.log(routes);
}, [])
  return (
    <>
    <form onSubmit={sendValue} type="submit" className="row g-3">
      <div className="col-md-6">
        <label htmlFor="whence" className="form-label fs-4 my-5">
          Откуда
        </label>
        <input
          onChange={inputWhence}
          type="text"
          className="form-control"
          id="whence"
          placeholder="Введите адрес"
          value={valueWhence ? valueWhence : ""}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="where" className="form-label fs-4 my-5">
          Куда
        </label>
        <input
          onChange={inputWhere}
          type="text"
          className="form-control"
          id="where"
          placeholder="Введите адрес"
          value={whereValue ? whereValue : ""}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="whence" className="form-label fs-4 my-5">
          Дата отправления
        </label>
        <input
          onChange={dateDeparture}
          type="text"
          className="form-control"
          id="whence"
          placeholder="Введите дату отправления"
          value={dateValue ? dateValue : ""}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="where" className="form-label fs-4 my-5">
          Время отправления
        </label>
        <input
          onChange={timeDeparture}
          type="text"
          className="form-control"
          id="where"
          placeholder="Введите время отправления"
          value={timeValue ? timeValue : ""}
        />
      </div>
      <div className="text-center">
      <Button variant="outline-success my-5" >
           Создать маршрут
          </Button>{" "}
      </div>
    </form>
    <div>
      {routes?.map(el => 
      <>
        <p>
          Откуда : {el.Route.pointA} 
        Куда : {el.Route.pointB} 
        Время: {el.Route.time}
        Кто нах: {el.User.name}
        </p>
      </>
      )}
    </div>
    </>
  );
}
export default AddItinerary;
