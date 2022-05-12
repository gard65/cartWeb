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
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

function AddItinerary() {
  const [valueWhence, setValueWhence] = useState();
  const [whereValue, setWhereValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [timeValue, setTimeValue] = useState();
  const { id, isDriver } = useSelector((state) => state.user);
  const routes = useSelector((state) => state.routes);
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
  useEffect(() => {
    dispatch(THUNK_getRoutesFromDB(isDriver));
    console.log(routes);
  }, []);
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
          <button type="submit" className="btn btn-primary mt-5">
            Подтвердить
          </button>
        </div>
      </form>
      <div>
        {routes?.map((el) => (
          <>
            {/* <p>
        Откуда : {el.Route.pointA} 
        Куда : {el.Route.pointB} 
        Время: {el.Route.time}
        Кто нах: {el.User.name}
        </p> */}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1ud02Ja8X0uAX2X2PSde0B-My8Bi-757Ug&usqp=CAU/100px180?text=Image cap"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Откуда : {el.Route.pointA} </ListGroupItem>
                <ListGroupItem>Куда : {el.Route.pointB}</ListGroupItem>
                <ListGroupItem>Время: {el.Route.time}</ListGroupItem>
                <ListGroupItem>Кто нах: {el.User.name}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}
export default AddItinerary;
