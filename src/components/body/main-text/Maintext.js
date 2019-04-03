import React, { Component } from "react";
import "./Maintext.css";
import Searchbar from "../../search_bar/Searchbar";

class Maintext extends Component {
  render() {
    return (
      <div id="main-text">
        <h1>Search for Drugs near you</h1>
        <h4>contribute information too...</h4>
        <Searchbar results={this.props.results} />
      </div>
    );
  }
}
export default Maintext;
