import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItineraryAction } from "../../redux/actions/addItineraryActions";
import { addItineraryFromDb, sendDateAndTime } from "../../redux/thuncs/asyncAction";
import { useNavigate } from "react-router-dom";
import { postDateDepartAction } from "../../redux/actions/postDateDepartAction";
import { postTimeDepartAction } from "../../redux/actions/postTimeDepartAction";

function AddItinerary() {
  const [valueWhence, setValueWhence] = useState();
  const [whereValue, setWhereValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [timeValue, setTimeValue] = useState();
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
    dispatch(sendDateAndTime(dateValue, timeValue));
    navigate("/mapRouter");
  }

  return (
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
        <button type="submit" className="btn btn-primary mt-5">
          Подтвердить
        </button>
      </div>
    </form>
  );
}
export default AddItinerary;
