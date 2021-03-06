import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItineraryAction } from "../../redux/actions/addItineraryActions";
import {
  addItineraryFromDb,
  sendDateAndTime,
  THUNK_getRoutesFromDB,
} from "../../redux/thuncs/asyncAction";
import { useNavigate } from "react-router-dom";
import { postDateDepartAction } from "../../redux/actions/postDateDepartAction";
import { postTimeDepartAction } from "../../redux/actions/postTimeDepartAction";

import { addMemberReducer } from "../../redux/reducers/addMemberReducer";
import { addRouteAction } from "../../redux/actions/addMemberUserAction";
import Main from "../Main/Main";
// import{Main} from "./Main/Main"

function AddItinerary() {
  const [valueWhence, setValueWhence] = useState();
  const [whereValue, setWhereValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [timeValue, setTimeValue] = useState();

  const { id, isDriver } = useSelector((state) => state.user || {});
  const routes = useSelector((state) => state.routes);
  const currentUserId = useSelector((state) => state.user?.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function inputWhence(e) {
    setValueWhence(e.target.value);
  }
  function inputWhere(e) {
    setWhereValue(e.target.value);
  }
  function dateDeparture(e) {
    setDateValue(e.target.value);
  }
  function timeDeparture(e) {
    setTimeValue(e.target.value);
  }

  function sendValue(e) {
    e.preventDefault();
    setValueWhence("");
    setWhereValue("");
    dispatch(addItineraryAction(valueWhence, whereValue));
    dispatch(addItineraryFromDb(valueWhence, whereValue));
    dispatch(postDateDepartAction(dateValue));
    dispatch(postTimeDepartAction(timeValue));
    dispatch(
      sendDateAndTime(
        dateValue,
        timeValue,
        valueWhence,
        whereValue,
        id,
        isDriver
      )
    );
    navigate("/mapRouter");
  }

  function goToChat(id) {
    dispatch({ type: "SELECT_ROUTE_CHAT", payload: id });
    navigate("/messanger");
  }
  //  function register(route, user){
  //   const newUser = {
  //     route: route,
  //     passenger:currentUserId,
  //     driver:user
  //   };
  //   return dispatch(addRouteAction(newUser));
  //  }
  useEffect(() => {
    dispatch(THUNK_getRoutesFromDB(isDriver));
  }, []);
  return (
    <>
    <Main/>
      <form onSubmit={sendValue} type="submit" className="row g-3">
        <div className="col-md-6">
          <label htmlFor="whence" className="form-label fs-4 my-2">

            ????????????
          </label>
          <input
            onChange={inputWhence}
            type="text"
            className="form-control"
            id="whence"
            placeholder="?????????????? ??????????"
            value={valueWhence ? valueWhence : ""}
          />
        </div>
        <div className="col-md-6">

          <label htmlFor="where" className="form-label fs-4 my-2">

            ????????
          </label>
          <input
            onChange={inputWhere}
            type="text"
            className="form-control"
            id="where"
            placeholder="?????????????? ??????????"
            value={whereValue ? whereValue : ""}
          />
        </div>

        <hr className="fs-4 mt-5" />
        <div className="col-md-6">
          <label htmlFor="whence" className="form-label fs-4 my-2">

            ???????? ??????????????????????
          </label>
          <input
            onChange={dateDeparture}

            type="date"

            className="form-control"
            id="whence"
            placeholder="?????????????? ???????? ??????????????????????"
            value={dateValue ? dateValue : ""}
          />
        </div>
        <div className="col-md-6">

          <label htmlFor="where" className="form-label fs-4 my-2">

            ?????????? ??????????????????????
          </label>
          <input
            onChange={timeDeparture}

            type="time"

            className="form-control"
            id="where"
            placeholder="?????????????? ?????????? ??????????????????????"
            value={timeValue ? timeValue : ""}
          />
        </div>

        <hr className="fs-4 mt-5" />

        <div className="text-center">
          <button type="submit" className="btn btn-outline-success  mt-5">
            ??????????????????????
          </button>
        </div>
      </form>
      <div>
        {routes?.map((el) => (

          <div key={el.id} className="border rounded border-success mt-3 py-3">
            <h3>?????????????? ???{el.Route.id}</h3>
            <p>???????????? : {el.Route.pointA}</p>
            <p>???????? : {el.Route.pointB}</p>
            <p>???????? ?????????????????????? : {el.Route.date.slice(0,10)}</p>
            <p>?????????? ?????????????????????? : {el.Route.time}</p>
            <button
              onClick={() => goToChat(el.Route.id)}
              type="submit"
              className="btn btn-outline-success  mt-5"
            >
              ?????????????? ?? ??????
            </button>
            {/* <button
                  onClick={()=>register(el.Route.id, el.userId)}
                  type="submit"
                  className="btn btn-outline-primary mx-3 mt-5"
                >????????????????????????????????????
                </button> */}
          </div>

        ))}
      </div>
    </>
  );
}
export default AddItinerary;
