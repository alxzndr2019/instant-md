import React, { Component } from "react";
import "./Searchresults.css";
import { Link } from "react-router-dom";
class Searchresults extends Component {
  state = {
    hero: "",
    displayResult: "",
    results: this.props.results
  };

  searchResult = () => {
    let count = 0;
    for (let index = 0; index < this.state.results.length; index++) {
      if (this.state.results[index] !== undefined) {
        count += 0;
      } else {
        count += 1;
      }
    }

    if (
      this.state.results.length !== 0 &&
      !(count === this.state.results.length)
    ) {
      this.setState({
        hero: "Search Results"
      });
    } else {
      this.setState({
        hero: "No Results"
      });
    }
  };

  getResults = () => {
    const result = this.state.results.map(result => {
      console.log(result);

      return <div>{result}</div>;
    });
    this.setState({
      displayResult: result
    });
  };

  componentDidMount() {
    console.log(this.state.results);
    this.searchResult();
    this.getResults();
  }

  render() {
    return (
      <div class="main-container">
        <div id="test">
          <h1>{this.state.hero}</h1>
        </div>
        <div id="results">
          <Link to="./Druginfo">{this.state.displayResult}</Link>
        </div>
      </div>
    );
  }
}

export default Searchresults;
