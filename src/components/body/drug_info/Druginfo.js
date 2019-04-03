import React, { Component } from "react";
import "./Druginfo.css";
class Druginfo extends Component {
  state = {
    name: ``,
    dosage: ``,
    price: ``,
    location: ``,
    drug_interaction: ``,
    drug_image_url: ``,
    results: this.props.results
  };

  // getDrugs() {
  //   axios
  //     .get("http://localhost:8080/api/druginfos")
  //     .then(
  //       this.element.map(element => ({
  //         name: `${element.name}`,
  //         dosage: `${element.dosage}`,
  //         price: `${element.price}`,
  //         drug_interaction: `${element.drug_interaction}`,
  //         drug_image_url: `${element.drug_image_url}`
  //       }))
  //     )
  //     .then(element => {
  //       this.setState({
  //         element
  //       });
  //     });
  // }

  render() {
    const {
      name,
      dosage,
      price,
      location,
      drug_interaction,
      drug_image_url
    } = this.props.getDrugData;
    console.log(`${this.props.getDrugData}`);
    return (
      <div class="info">
        <div id="maintxt">
          <h1>Drug Information</h1>
        </div>
        <div id="name">{name}</div>
        <div id="dosage">{dosage}</div>
        <div id="price">{price}</div>
        <div id="location">{location}</div>
        <div id="druginteraction">{drug_interaction}</div>
        <div id="drugimgurl">{drug_image_url}</div>
      </div>
    );
  }
}
export default Druginfo;
