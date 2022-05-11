import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItineraryAction } from "../../redux/actions/addItineraryActions";
import { addItineraryFromDb } from "../../redux/thuncs/asyncAction";

function AddItinerary() {
  const [valueWhence, setValueWhence] = useState();
  const [whereValue, setWhereValue] = useState();
  const dispatch = useDispatch();

  function inputWhence(e) {
    setValueWhence(e.target.value);
  }
  function inputWhere(e) {
    setWhereValue(e.target.value);
  }
  function sendValue(e) {
    e.preventDefault();
    setValueWhence("")
    setWhereValue('')
    dispatch(addItineraryAction(valueWhence, whereValue ));
  }

  return (
    <form onSubmit={sendValue} type="submit" className="row g-3 mt-5">
      <div className="col-md-6">
        <label htmlFor="whence" className="form-label">
          <h2> Откуда</h2>
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
        <label htmlFor="where" className="form-label">
          <h2>Куда</h2>
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
        <button type="submit" className="btn btn-success">
          Подтвердить
        </button>
      </div>
    </form>
  );
}
export default AddItinerary;
