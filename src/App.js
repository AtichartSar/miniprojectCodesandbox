import React from "react";
import data from "./data.json";
import Product from "./components/Products";
import Filter from "./components/Filter";

console.log(data);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:""
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shop</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}/>
              <Product products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right ®</footer>
      </div>
    );
  }
}
