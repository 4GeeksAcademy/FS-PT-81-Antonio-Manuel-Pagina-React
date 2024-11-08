import React from "react";

export const Navbar = () => {
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color: "yellow"}}>Start Bootstrap</a>

    <div>
      <button className="navbar-toggler" style={{border: "2px solid rgba(255, 255, 255, .5)"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-color-50"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" style={{color: "yellow"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "yellow"}} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "yellow"}} href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "yellow"}} href="#">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
	);
};

