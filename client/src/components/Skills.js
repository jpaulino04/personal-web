import React from "react";

function Skills() {
  return (
    <div>
      <hr className="my-4" />

      <div className="row">
        <div className="col-sm-12">
          <h2 className="display-4 text-center">
            Skills <i className="fas fa-cogs" />
          </h2>
        </div>
        <div className="col-sm-6">
          <h4 className="d-inline">HTML</h4>
          <div className="progess mb-3">
            <div className="progress bar bg-dark" style={{ width: "92%" }} />{" "}
          </div>
          <h4 className="d-inline">CSS</h4>
          <div className="progess mb-3">
            <div className="progress bar bg-dark" style={{ width: "88%" }} />{" "}
          </div>
          <h4 className="d-inline">javaScript</h4>
          <div className="progess mb-3">
            <div className="progress bar bg-dark" style={{ width: "85%" }} />{" "}
          </div>
          <h4 className="d-inline">Bootstrap</h4>
          <div className="progess mb-3">
            <div className="progress bar bg-dark" style={{ width: "84%" }} />{" "}
          </div>
          <h4 className="d-inline">Node JS</h4>
          <div className="progess mb-3">
            <div className="progress bar bg-dark" style={{ width: "82%" }} />{" "}
          </div>
        </div>
        <div className="col-sm-6 text-center more">
          <h4 className=" text-center pb-4">
            {" "}
            More <i className="far fa-smile" />{" "}
          </h4>
          <ul className="list-group d-inline my-3">
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check " /> AWS{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> Git{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> JSON{" "}
            </li>
          </ul>
          <ul className="list-group d-block my-3">
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check " /> Linux{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> MongoDB{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> Lambda{" "}
            </li>
          </ul>
          <ul className="list-group d-block my-3">
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check " /> SSL{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> Bitbucket{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> RDS{" "}
            </li>
          </ul>
          <ul className="list-group d-block my-3">
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check " /> React{" "}
            </li>
            <li className="list-item p-3 d-inline">
              {" "}
              <i className="fas fa-check" /> MySQL{" "}
            </li>           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
