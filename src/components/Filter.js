import React, { Component } from "react";
export default class Filter extends Component {
  render() {
    return (
      <div class="filter">
        <div className="filter-result">{this.props.count}</div>
        <div className="filter-sort">
          Order {" "}
          <select>
            <option>Latest</option>
            <option value="lower">Lower</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div class="filter-size">
          filter {" "}
          <select>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>
    );
  }
}
