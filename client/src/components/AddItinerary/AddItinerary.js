import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItineraryAction } from "../../redux/actions/addItineraryActions";
import { addItineraryFromDb } from "../../redux/thuncs/asyncAction";
import { useNavigate } from "react-router-dom";

function AddItinerary() {
  const [valueWhence, setValueWhence] = useState();
  const [whereValue, setWhereValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function inputWhence(e) {
    setValueWhence(e.target.value);
  }
  function inputWhere(e) {
    setWhereValue(e.target.value);
  }
  function sendValue(e) {
    e.preventDefault();
    setValueWhence("");
    setWhereValue("");
    dispatch(addItineraryAction(valueWhence, whereValue));
    dispatch(addItineraryFromDb(valueWhence, whereValue));
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
      <div className="text-center">
        <button type="submit" className="btn btn-primary mt-5">
          Подтвердить
        </button>
      </div>
    </form>
  );
}
export default AddItinerary;
