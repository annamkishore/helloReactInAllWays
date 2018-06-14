import React, { Component } from 'react';
import { render } from 'react-dom';

//import 'react-sortable-tree/style.css';
//import SortableTree from 'react-sortable-tree';

export default class TreeComponentSortable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Chicken', expanded: true, children: [{ title: 'Egg' }] },
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 300 }}>
        hello
      </div>
    );
  }
}
