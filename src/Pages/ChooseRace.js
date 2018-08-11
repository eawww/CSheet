import React, { Component } from "react";
import "../Stylesheets/App.css";
import Tile from "../Components/Tile.js";

import dragonborn from "../images/dragonborn.png";
import dwarf from "../images/dwarf.png";
import elf from "../images/elf.png";
import halfelf from "../images/half-elf.png";
import halfling from "../images/halfling.png";
import halforc from "../images/half-orc.png";
import human from "../images/human.png";
import tiefling from "../images/tiefling.png";

import { Analytics } from "aws-amplify";

class ChooseRace extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader">Pick a race</h1>
        <ul className="tiles-section">
          <Tile
            id={"5"}
            image={dragonborn}
            link="/chooseClass"
            text="Dragonborn"
          />
          <Tile id={"1"} image={dwarf} link="/chooseClass" text="Dwarf" />
          <Tile id={"2"} image={elf} link="/chooseClass" text="Elf" />
          <Tile id={"7"} image={halfelf} link="/chooseClass" text="Half-Elf" />
          <Tile id={"3"} image={halfling} link="/chooseClass" text="Halfling" />
          <Tile id={"8"} image={halforc} link="/chooseClass" text="Halforc" />
          <Tile id={"4"} image={human} link="/chooseClass" text="Human" />
          <Tile id={"9"} image={tiefling} link="/chooseClass" text="Tiefling" />
        </ul>
      </div>
    );
  }
}

// API Race Order:
// Dwarf
// Elf
// Halfling
// Human
// Dragonborn
// Gnome
// Half-Elf
// Half-Orc
// Tiefling

export default ChooseRace;
// export default withAuthenticator(App);
