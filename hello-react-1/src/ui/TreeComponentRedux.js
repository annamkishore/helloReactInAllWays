import React, { Component } from 'react';
import { Grid } from 'react-redux-grid';

import {plugins, data, columns} from './demoData';

const config = {
    columns: columns,
    data: data.data,
    plugins: plugins,
    stateKey: "grid-1"
};

const treeConfig = {
    stateKey: 'tree-grid-1',
    gridType: 'tree', // either `tree` or `grid`,
    showTreeRootNode: false, // dont display root node of tree
    columns: [
        {
            dataIndex: 'label',
            name: 'Category',
            expandable: true // this will be the column that shows the nested hierarchy
        },
    ],
    data: {
        root: {
          id: 0,
          parentId: null,
          children: [
              {
                  id: 1,
                  parentId: 0,
                  label: "Read ratio group",
                  children: [
                      {
                          id: 12,
                          parentId: 1,
                          label: "read 1"
                      },
                      {
                          id: 13,
                          parentId: 1,
                          label: "read 2"
                      }
                  ]
              },
              {
                  id: 2,
                  parentId: 0,
                  label: "Write ratio group",
                  children: [
                      {
                          id: 22,
                          parentId: 2,
                          label: "write 1",
                      },
                      {
                          id: 23,
                          parentId: 2,
                          label: "write 2"
                      }
                  ]
              },
              {
                  id: 3,
                  parentId: -1,
                  label: "Random ratio group",
                  children: [
                      {
                          id: 32,
                          parentId: 3,
                          label: "random 1",
                      },
                      {
                          id: 33,
                          label: "random 2",
                          parentId: 3
                      }
                  ]
              },

          ]
        }
          },
    plugins: {}

};
export default class TreeComponent extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(config);
        return (
            <Grid {...treeConfig}/>
        );
    }
}