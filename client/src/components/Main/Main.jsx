import { YMaps, Map, Placemark } from "react-yandex-maps";
import React, { useEffect } from "react";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { getMapStateFromDb } from "../../redux/thuncs/asyncAction";
import { Link } from "react-router-dom";

function Main() {
  const mapState = useSelector((state) => state.mapState);
  const coordinates = useSelector((state) => state.coordinates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMapStateFromDb());
  }, []);
  return (
    <>
      <YMaps>
        <div>
          <div className="d-flex justify-content-center mt-5">
            <Map defaultState={mapState}>
              {coordinates.map((coordinate) => (
                <Placemark key={uuid()} geometry={coordinate} />
              ))}
            </Map>
          </div>
          <div className="d-grid gap-2 col-2 mx-auto">
            <Link to="/route">
              <button className="btn btn-outline-success my-3" type="button">
                Создать маршрут
              </button>
            </Link>
          </div>
        </div>
      </YMaps>
    </>
  );
}
export default Main;
