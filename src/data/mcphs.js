export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    // labelFormat: 'y',
    labelFormat: 'MMM',
    intervalType: 'Months',
    interval: 1,
    edgeLabelPlacement: 'Shift',
    minimum: new Date(2005, 0, 1), 
    maximum: new Date(2005, 11, 1), 
    majorGridLines: { width: 0 },
    background: 'white',
};

export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 10,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};

export const lineChartData = [
    [
        { x: new Date(2005, 0, 1), y: 21 },
        { x: new Date(2005, 1, 1), y: 24 },
        { x: new Date(2005, 2, 1), y: 36 },
        { x: new Date(2005, 3, 1), y: 38 },
        { x: new Date(2005, 4, 1), y: 54 },
        { x: new Date(2005, 5, 1), y: 57 },
        { x: new Date(2005, 6, 1), y: 70 },
        { x: new Date(2005, 7, 1), y: 80 },
        { x: new Date(2005, 8, 1), y: 85 },
        { x: new Date(2005, 9, 1), y: 55 },
        { x: new Date(2005, 10, 1), y: 75 },
        { x: new Date(2005, 11, 1), y: 59 },
    ],
    [
        { x: new Date(2005, 0, 1), y: 28 },
        { x: new Date(2005, 1, 1), y: 44 },
        { x: new Date(2005, 2, 1), y: 48 },
        { x: new Date(2005, 3, 1), y: 50 },
        { x: new Date(2005, 4, 1), y: 66 },
        { x: new Date(2005, 5, 1), y: 78 },
        { x: new Date(2005, 6, 1), y: 84 },
        { x: new Date(2005, 7, 1), y: 45 },
        { x: new Date(2005, 8, 1), y: 67 },
        { x: new Date(2005, 9, 1), y: 63 },
        { x: new Date(2005, 10, 1), y: 57 },
        { x: new Date(2005, 11, 1), y: 74 },
    ],

    [
        { x: new Date(2005, 0, 1), y: 10 },
        { x: new Date(2005, 1, 1), y: 20 },
        { x: new Date(2005, 2, 1), y: 30 },
        { x: new Date(2005, 3, 1), y: 39 },
        { x: new Date(2005, 4, 1), y: 50 },
        { x: new Date(2005, 5, 1), y: 70 },
        { x: new Date(2005, 6, 1), y: 82 },
        { x: new Date(2005, 7, 1), y: 59 },
        { x: new Date(2005, 8, 1), y: 49 },
        { x: new Date(2005, 9, 1), y: 77 },
        { x: new Date(2005, 10, 1), y: 82 },
        { x: new Date(2005, 11, 1), y: 71 },
    ],
];

export const lineCustomSeries = [
    {
        dataSource: lineChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'CO',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

    {
        dataSource: lineChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'NO',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

    {
        dataSource: lineChartData[2],
        xName: 'x',
        yName: 'y',
        name: 'NO2',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

];
