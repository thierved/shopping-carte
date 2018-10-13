import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectItem} from '../actions';


class Item extends Component {
  
  render() {
    return (
        <li className="item"
        onClick={() => this.props.selectItem(this.props.name)}>{this.props.name}</li>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectItem}, dispatch);
}

export default connect(null, mapDispatchToProps)(Item);