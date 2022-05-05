import React from "react";
const divStile = {maxWidth:'700px',
height:'40vh'
}
function PersonalAcc(props) {
  return (
    <>
      <div className="card mb-3 mt-5" style={divStile}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.thispersondoesnotexist.com/image?51651747789"
              className="img-fluid rounded-start"
              alt="image"
            />
          </div>
          <div className="col-md-8 my-5">
            <div className="card-body my-5">
              <h5 className="card-title">Имя Фамилия</h5>
              <p className="card-text my-5">
                This is a wider card with supporting text below as a natural
              </p>
              <p className="card-text my-5">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalAcc;
