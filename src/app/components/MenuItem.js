import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <center>
      <div style={{  backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "50vh",
          width : "60vh",
          color: "#f5f5f5" }}> </div>
      </center>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;