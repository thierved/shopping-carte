import React, { Component } from 'react';
import {connect} from 'react-redux';

import Item from './Item';
import '../App.css';

class App extends Component {
  
  renderItem() {
    return this.props.allProducts.map(item => {
      return <Item key={item.name} name={item.name}/>
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="products">
          <h3>products</h3>
          {this.renderItem()}
        </div>

        <div className="basket">
          <h3>basket</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts : state.products
  }
}


export default connect(mapStateToProps, null)(App);
