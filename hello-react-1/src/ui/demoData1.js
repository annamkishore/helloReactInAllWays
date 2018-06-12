import React from 'react';

export const plugins = {
    GRID_ACTIONS: {
        iconCls: 'action-icon',
        menu: [
            {
                text: 'Delete',
                key: 'delete',
                EVENT_HANDLER: ({ metaData }) => {
                    const rowIndex = metaData.rowIndex;

                }
            }
        ]
    }
};

