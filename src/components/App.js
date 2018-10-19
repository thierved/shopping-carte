import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Item from './Item';
import '../App.css';

class App extends Component {
  
  renderItem(products) {
    return products.map(item => {
      return <Item key={item.name} name={item.name}/>
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="products">
          <h3>products</h3>
          {this.renderItem(this.props.allProducts)}
        </div>

        <div className="basket">
          <h3>bag</h3>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts : state.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
