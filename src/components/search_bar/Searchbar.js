import React, { Component } from "react";
import "./Searchbar.css";
// import axios from "axios";
import Suggestions from "./Suggestions/Suggestions";
// import { Link, HashRouter } from "react-router-dom";
import Autosuggest from "react-autosuggest";
// const { API_KEY } = process.env;
// const drugs = "http://localhost:8080/api/druginfos";
const languages = [
  {
    name: "C",
    year: 1972
  },
  {
    name: "Elm",
    year: 2012
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};
const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class Searchbar extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setStste({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type drug name",
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }

  // state = {
  //   query: "",
  //   results: []
  // };

  // getInfo = e => {
  //   axios
  //     .get(`${API_URL}?api_key=${API_KEY}&prefix=&limit= 7`)
  //     .then(({ data }) => {
  //       console.log("fire" + data);
  //       let filteredData = [];
  //       filteredData = data.map(element => {
  //         if (
  //           element.name.toLowerCase().slice(0, this.state.query.length) ===
  //           this.state.query
  //         ) {
  //           return element;
  //         } else {
  //           element.name = "";
  //           return element;
  //         }
  //       });
  //       if (!this.state.query.length >= 1) {
  //         filteredData = [];
  //       }
  //       this.setState({
  //         results: filteredData
  //       });
  //       this.props.results(this.state.results);
  //     });
  // };

  // onTextChanged = e => {
  //   this.setState({
  //     query: e.target.value
  //   });
  //   this.getInfo(e);
  // };

  // render() {
  //   console.log(this.state.results);
  //   return (
  //     <div id="container">
  //       <div id="searchbar">
  //         <form>
  //           <input
  //             type="text"
  //             className="input"
  //             placeholder="Enter drug name..."
  //             ref={input => (this.search = input)}
  //             onChange={this.onTextChanged}
  //             value={this.state.query}
  //           />

  //           <Suggestions results={this.state.results} />

  //           <HashRouter>
  //             <Link to="/Searchresults">
  //               <button type="submit" className="search-btn">
  //                 Search
  //               </button>
  //             </Link>
  //           </HashRouter>
  //         </form>
  //       </div>

  //       <br />
  //     </div>
  //   );
  // }
}
export default Searchbar;
