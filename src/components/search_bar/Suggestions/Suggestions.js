import React from "react";
import "./Suggestions.css";
class Suggestions extends React.Component {
  state = {
    selectedDrug: {}
  };

  selectDrug = e => {
    this.props.results.map(drug => {
      if (e.target.name === drug.name) {
        this.setState({ selectedDrug: drug });
      }
    });
  };
 
  // listOfDrugs = this.props.results.map((r) => {
  //   return (
  //     <ul>
  //       <button type="button" name={r.name} onClick={this.selectDrug}>
  //         {r.name}
  //       </button>
  //     </ul>
  //   );
  // });

  // listOfDrugs() {
  //   Object.values(this.props.results).map(r => {
  //     return (
  //       <li key={r.id}>
  //         <button type="button" name={r.name} onClick={this.selectDrug}>
  //           {r.name}
  //         </button>
  //       </li>
  //     );
  //   });
  // }

  // componentDidMount() {
  //   this.listOfDrugs();
  // }

  render() {
    console.log(this.state.selectedDrug.name);
    console.log(this.props.results);
    console.log(this.listOfDrugs);
    var listitems = this.props.results.map(function(d, idx) {
      return (
        <ul>
          <button
            key={idx}
            type="button"
            name={d.name}
            // onClick={this.selectDrug}
          >
            {d.name}
          </button>
        </ul>
      );
    });
    return (
      <div>
        <ul>{listitems}</ul>
      </div>
    );
  }
}
export default Suggestions;
