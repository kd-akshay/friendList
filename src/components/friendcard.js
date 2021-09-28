import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
const FriendCard = (props) => {
  return (
    <div className="card bg-success text-white">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <span className="h6">{props.name}</span>
            <br></br>
            <span> is your friend</span>
          </div>
          <div className="col-2 text-white">
            <IconContext.Provider
              value={{ color: props.isFav ? "gold" : "black", margin: "auto" }}
            >
              <button
                className="btn btn-light padding-top-2"
                onClick={() => {
                  props.handleFav(props.name);
                }}
              >
                <FaStar
                  className="m-auto"
                  style={{ backgroundColor: "white" }}
                />
              </button>
            </IconContext.Provider>
          </div>
          <div className="col-2 text-white">
            <IconContext.Provider value={{ color: "red", margin: "auto" }}>
              <button
                className="btn btn-light padding-top-2"
                onClick={() => {
                  props.removeFriend(props.name);
                }}
              >
                <FaTrash className="m-auto" />
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
