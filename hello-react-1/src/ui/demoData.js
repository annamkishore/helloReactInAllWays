export const plugins = {
    COLUMN_MANAGER: {
        resizable: true,
        moveable: true,
        sortable: {
            enabled: true,
            method: 'local',
            sortingSource: 'http://react-redux-grid.herokuapp.com/getfakeData'
        }
    },
    STICKY_HEADER: {
        enabled: true
    },
    STICKY_FOOTER: {
        enabled: true
    },
    EDITOR: {
        type: 'inline',
        enabled: true,
        focusOnEdit: true
    },
    PAGER: {
        enabled: true,
        pagingType: 'remote'
    },
    LOADER: {
        enabled: true
    },
    SELECTION_MODEL: {
        mode: 'checkbox-multi',
        enabled: true,
        allowDeselect: true,
        activeCls: 'active',
        selectionEvent: 'singleclick',
        editEvent: 'none'
    },
    ERROR_HANDLER: {
        defaultErrorMessage: 'AN ERROR OCURRED',
        enabled: true
    },
    BULK_ACTIONS: {
        enabled: false,
        actions: [
            {
                text: 'Move',
                EVENT_HANDLER: () => {

                }
            },
            {
                text: 'Add',
                EVENT_HANDLER: () => {

                }
            }
        ]
    },
    GRID_ACTIONS: {
        iconCls: 'action-icon',
        menu: [
            {
                text: 'Delete',
                key: 'delete',
                EVENT_HANDLER: ({ metaData }) => {
//                    const rowIndex = metaData.rowIndex;

//                    store.dispatch(
//                        Actions.EditorActions.removeRow({
//                            stateKey,
//                            rowIndex
//                        })
//                    );
                }
            }
        ]
    }
};

export const columns = [
    {
        name: 'Name',
        dataIndex: 'Name',
        sortable: true,

        className: 'additional-class',
        expandable: true,
    },
    {
        name: 'Phone Number',
        dataIndex: 'Phone Number',
        sortable: true,
        className: 'additional-class',
    },
    {
        name: 'Email',
        dataIndex: 'Email',
        sortable: true,
        className: 'additional-class',
        defaultSortDirection: 'descend',
    },
    {
        name: 'Address',
        dataIndex: 'Address',
        sortable: true,
    }
];


export const data = {
                      "data": [
                        {
                          "Name": "Sawyer",
                          "Phone Number": "(209) 915-9426",
                          "Email": "dui.nec@Seddictum.co.uk",
                          "Address": "7815 Accumsan St.",
                          "customProperty": "should be available"
                        },
                        {
                          "Name": "Chadwick",
                          "Phone Number": "(666) 320-2563",
                          "Email": "vitae.sodales@leoMorbi.com",
                          "Address": "P.O. Box 994, 452 Sed Rd."
                        },
                        {
                          "Name": "Amir",
                          "Phone Number": "(389) 820-0954",
                          "Email": "ut.dolor.dapibus@ametconsectetuer.edu",
                          "Address": "P.O. Box 266, 3974 Aptent St."
                        },
                        {
                          "Name": "Evan",
                          "Phone Number": "(302) 529-2950",
                          "Email": "Integer.tincidunt@pellentesquetellus.org",
                          "Address": "Ap #357-1548 Orci. St."
                        },
                        {
                          "Name": "Neville",
                          "Phone Number": "(237) 790-0165",
                          "Email": "ornare.egestas@anteiaculis.net",
                          "Address": "P.O. Box 773, 7431 Massa. St."
                        },
                        {
                          "Name": "Felix",
                          "Phone Number": "(191) 624-5762",
                          "Email": "ipsum.Donec.sollicitudin@tristique.edu",
                          "Address": "928 Velit Av."
                        },
                        {
                          "Name": "Asher",
                          "Phone Number": "(481) 326-1028",
                          "Email": "Mauris@velitAliquamnisl.com",
                          "Address": "Ap #962-9677 Amet St."
                        },
                        {
                          "Name": "Rahim",
                          "Phone Number": "(946) 134-9286",
                          "Email": "eget.mollis@enimmitempor.co.uk",
                          "Address": "Ap #302-3189 Urna Road"
                        },
                        {
                          "Name": "Perry",
                          "Phone Number": "(372) 299-0265",
                          "Email": "lorem.ac.risus@nisisem.net",
                          "Address": "Ap #321-1993 Vestibulum St."
                        },
                        {
                          "Name": "Sean",
                          "Phone Number": "(246) 513-8870",
                          "Email": "aliquet@dolor.net",
                          "Address": "8860 Erat Road"
                        },
                        {
                          "Name": "Jonas",
                          "Phone Number": "(407) 273-5352",
                          "Email": "quis@Phasellus.org",
                          "Address": "8531 Nec, Street"
                        },
                        {
                          "Name": "Cadman",
                          "Phone Number": "(621) 978-5580",
                          "Email": "nulla@habitant.com",
                          "Address": "Ap #781-3859 Imperdiet, Road"
                        },
                        {
                          "Name": "Tanner",
                          "Phone Number": "(989) 608-0827",
                          "Email": "auctor@Etiamlaoreetlibero.com",
                          "Address": "P.O. Box 789, 2025 Nunc. Street"
                        },
                        {
                          "Name": "Tyrone",
                          "Phone Number": "(494) 411-2436",
                          "Email": "auctor.velit.eget@bibendumDonecfelis.co.uk",
                          "Address": "210-446 Vivamus Av."
                        },
                        {
                          "Name": "Axel",
                          "Phone Number": "(712) 326-4151",
                          "Email": "feugiat.placerat@acturpisegestas.ca",
                          "Address": "5764 Fermentum Rd."
                        },
                        {
                          "Name": "Fletcher",
                          "Phone Number": "(604) 139-1223",
                          "Email": "venenatis@idanteNunc.co.uk",
                          "Address": "P.O. Box 254, 624 Augue Road"
                        },
                        {
                          "Name": "Fuller",
                          "Phone Number": "(447) 480-6013",
                          "Email": "massa@Proindolor.net",
                          "Address": "Ap #931-3695 Pede Ave"
                        },
                        {
                          "Name": "Quinlan",
                          "Phone Number": "(576) 903-5533",
                          "Email": "nisi@IntegermollisInteger.edu",
                          "Address": "8857 Sed Avenue"
                        },
                        {
                          "Name": "Bevis",
                          "Phone Number": "(102) 626-7538",
                          "Email": "pede.Cum@molestiearcuSed.co.uk",
                          "Address": "5771 Auctor St."
                        },
                        {
                          "Name": "Mason",
                          "Phone Number": "(475) 513-3225",
                          "Email": "Sed@sodalesnisimagna.org",
                          "Address": "Ap #520-277 Hendrerit. Avenue"
                        }
                      ],
                      "total": 100
                    };