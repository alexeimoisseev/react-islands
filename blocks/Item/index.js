import React from 'react';
import Component from '../Component';

class Item extends Component {}

Item.propTypes = {
    disabled: React.PropTypes.bool,
    value: React.PropTypes.any,
    checkedText: React.PropTypes.any,
};

export default Item;
