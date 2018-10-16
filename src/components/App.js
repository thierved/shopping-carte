import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Item from './Item';
import {selectItem, itemToRemove} from '../actions';
import '../App.css';

class App extends Component {
  
  renderItem(products, handleClick) {
    return products.map(item => {
      return <Item key={item.name} name={item.name}
             handleClick={handleClick.bind(this, item.name)}/>
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="products">
          <h3>products</h3>
          {this.renderItem(this.props.allProducts, selectItem)}
        </div>

        <div className="basket">
          <h3>basket</h3>
          {this.renderItem(this.props.selectedItems, itemToRemove)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts : state.products,
    selectedItems: state.selectedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectItem}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
