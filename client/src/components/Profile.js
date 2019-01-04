import React from "react";

function Profile() {
  return (
    <div className="row mt-3 row-one ">
      <div className="col-sm-6">
        <div className="card card-body">
          <img
            className="img-thumbnail rounded-circle"
            src={require("./img/jpaulino.jpg")}
            alt=""
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card card-body">
          <p className="text-muted text-center">
            I am a passionate, and highly motivated Web developer. My ample
            experience in Systems Administration allow me to look at web
            development from different perspective, and to build very secured,
            and highly available and scalable websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
