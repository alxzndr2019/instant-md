import React, { Component } from "react";
import Navbar from "./components/navigation_bar/Navbar";
import Maintext from "./components/body/main-text/Maintext";
import Adddrug from "./components/body/add-drug/Adddrug";
import Searchresults from "./components/body/search_results/Searchresults";
import { Route, HashRouter } from "react-router-dom";
import Druginfo from "./components/body/drug_info/Druginfo";
class App extends Component {
  state = {
    drugResults: [],
    drugData: {}
  };

  transfer = result => {
    this.setState({
      drugResults: result
    });
  };

  drugData = drugData => {
    this.setState({
      drugData: drugData
    });
  };

  render() {
    return (
      <HashRouter>
        <div className="container">
          <Navbar />
          <Route
            exact
            path="/"
            render={props => (
              <Maintext results={this.transfer} drugData={this.drugData} />
            )}
          />
          <Route exact path="/Adddrug" component={Adddrug} />
          <Route
            exact
            path="/Druginfo"
            render={props => (
              <Druginfo
                results={this.state.drugResults}
                getDrugData={this.state.drugData}
              />
            )}
          />
          <Route
            exact
            path="/Searchresults"
            render={props => <Searchresults results={this.state.drugResults} />}
          />
        </div>
      </HashRouter>
    );
  }
}
export default App;
