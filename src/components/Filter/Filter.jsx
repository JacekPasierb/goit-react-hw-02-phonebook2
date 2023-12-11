import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <>
        <label htmlFor="filter">Find by name</label>
        <input type="text" name="filter" onChange={this.props.changeFilter} value={this.props.filter}/>
      </>
    );
  }
}
