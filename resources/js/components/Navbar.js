import React from "react";
import { Link } from "react-router-dom";
import '../../css/app.css';
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">CPS 530 Project</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/install">Install</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/framework">FrameWork</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tuitorial">Tutorial</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/conclusion">Conclusion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/references">References</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}
export default Navbar;