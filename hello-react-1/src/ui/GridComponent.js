import React, { Component } from 'react';
import { Grid } from 'react-redux-grid';

import {plugins, data, columns} from './demoData';

        const config = {
            columns: columns,
            data: data.data,
            plugins: plugins,
            stateKey: "grid-1"
        };

export default class GridComponent extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(config);
        return (
            <Grid {...config}/>
        );
    }
}