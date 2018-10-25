import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Item from './Item';
import { addItemToBag, removeItemFromBag } from '../actions';
import '../App.css';

class App extends Component {
  
  renderItem(products, clickable) {
    return products.map(item => {
      return <Item key={item.id} 
                   price={item.price}
                   name={item.name}
                   id={item.id}
                   handleClick={this.props.addItemToBag}
                   clickable={clickable}/>
    });
  }
  
  render() {
    
    return (
      <div className="container">
        <div className="products">
          <h3>products</h3>
          <ul>
            {this.renderItem(this.props.products, true)}
          </ul>
        </div>

        <div className="basket">
          <h3>bag</h3>
          <ul>
            {this.renderItem(this.props.bag, false)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.products,
    bag: state.bag
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addItemToBag, removeItemFromBag}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
