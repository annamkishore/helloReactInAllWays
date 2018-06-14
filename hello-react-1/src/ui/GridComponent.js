import React, { Component } from 'react';
import { Grid } from 'react-redux-grid';

import {plugins, data, columns} from './demoData';

const config = {
    columns: columns,
    data: data.data,
    plugins: plugins,
    stateKey: "grid-1"
};

const config1 = {
    columns: [
        {
          name: 'Emp Name',
          dataIndex: 'Name1',
        },
        {
          name: 'Emp Phone Number',
          dataIndex: 'Phone Number',
        },

    ],
    data: [
        {
         "Name1": "Sawyer",
         "Phone Number": "(209) 915-9426",
        },
        {
         "Name1": "Chadwick",
         "Phone Number": "(666) 320-2563",
        },
    ],
    plugins: {},
    stateKey: "grid-1"
};

export default class GridComponent extends Component {
    render() {
        console.log(config);
        return (
            <Grid {...config1}/>
        );
    }
}