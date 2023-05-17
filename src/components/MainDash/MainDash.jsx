import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import './MainDash.css'

function MainDash() {
  return (
    <div className="MainDash">
        <div className="mainTop">
          <h1>Dashboard.</h1>
          <input type="text" placeholder= "Search.."/>
        </div>
        <Cards/>
        <Table/>
    </div>
  );
}

export default MainDash;
