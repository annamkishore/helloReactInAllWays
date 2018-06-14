import React, { Component } from 'react';
import { render } from 'react-dom';

import 'react-sortable-tree/style.css';
import SortableTree, {changeNodeAtPath} from 'react-sortable-tree';
//import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree';

export default class TreeComponentSortable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { name: 'node 1', children: [{name: 'node 11'}, {name: 'node 12'}], expanded: true },
        { name: 'node 2', children: [{name: 'node 21'}, {name: 'node 22'}] },
        { name: 'node 3'}
      ],
      treeData1: [
        { title: 'node 1', children: [{title: 'node 11'}, {title: 'node 12'}], expanded: true },
        { title: <span><input />node 2</span>, children: [{title: 'node 21'}, {title: 'node 22'}] },
        { title: 'node 3'}
      ],
    };

    this.f1 = this.f1.bind(this);
    this.nodeClicked = this.nodeClicked.bind(this);
  }

  f1(obj) {
    console.log(obj);
  }

  nodeClicked(event, rowInfo) {
    console.log("clicked");
    console.log({event, rowInfo});
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <div>
        <div style={{ height: 600 }}>
          <SortableTree
            treeData={this.state.treeData1}
            onChange={treeData1 => this.setState({ treeData1 })}
            getNodeKey={this.f1}
            generateNodeProps={rowInfo => {
                let nodeProps = { onClick: event => this.nodeClicked(event, rowInfo) };
                if (this.state.selectedNodeId === rowInfo.node._id) {
                    nodeProps.className = 'selected-node';
                }
                return nodeProps;
            }}
//            generateNodeProps={({ node, path }) => ({
//              title: (
//                <input
//                  style={{ fontSize: '1.1rem' }}
//                  value={node.name}
//                  onChange={event => {
//                    const name = event.target.value;
//
//                    this.setState(state => ({
//                      treeData: changeNodeAtPath({
//                        treeData: state.treeData,
//                        path,
//                        getNodeKey,
//                        newNode: { ...node, name },
//                      }),
//                    }));
//                  }}
//                />
//              ),
//            })}
          />
        </div>
      </div>);
    }
}
