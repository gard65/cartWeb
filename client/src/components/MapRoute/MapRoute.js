import { useEffect, useRef, useState } from "react";
import {  useSelector } from "react-redux";
import { YMaps, Map } from "react-yandex-maps";

export default function MapRoute() {
  const pointA = useSelector((state) => state.pointStart);
  const pointB = useSelector((state) => state.pointFinish);
  const map = useRef(null);
  const [status, setStatus] = useState(false)
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 10,
  };
  useEffect(() => {
    if (pointA.length > 0) {
      setStatus(true)
    }
  }, [pointA])
  
  const apikey = "82ba8b5d-624d-4215-9743-46ec4b12f13d";
  const addRoute = (ymaps) => {
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "auto",
        },
      },
      {
        boundsAutoApply: true,
      }
    );
    map.current.geoObjects.add(multiRoute);
  };

  return (
    <>
      {status ? (
        <div className="d-flex justify-content-center mt-5">
          <YMaps query={{ apikey }}>
            <div className="align-middle">
              <Map
                modules={["multiRouter.MultiRoute"]}
                state={mapState}
                instanceRef={map}
                onLoad={addRoute}
                width={"800px"}
                height={"500px"}
              ></Map>
            </div>
          </YMaps>
        </div>
      ) : (
        <div className="spinner-border text-success mt-5" role="status">
          <span className="visually-hidden mt-5">Loading...</span>
        </div>
      )}
    </>
  );
}
