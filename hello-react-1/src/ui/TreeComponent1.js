import React, { Component } from 'react';
import { render } from 'react-dom';

import 'react-sortable-tree/style.css';
import SortableTree from 'react-sortable-tree';

export default class TreeComponent1 extends Component {
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
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}
