import React from "react";
import { Link, Outlet } from "react-router";

function Hero() {
  return (
    <React.Fragment>
      <Link to={"/about"}>
        <img src="/Frodo_(FotR).webp" alt="frodo" width={500} />
        <h1>Frodo Baggins</h1>
      </Link>
      <Outlet></Outlet>
    </React.Fragment>
  );
}

export default Hero;
