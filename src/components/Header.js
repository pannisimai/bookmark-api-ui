import React from "react";
import "../styles/Header.scss";

export default function Header() {
  return (
    <div className="col-12 header">
      <nav className="navbar navbar-light justify-content-between">
        <a className="navbar-brand">Bookmark API</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-dark my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
