var colours = {
    line: [
        '#c10001', '#850001', '#000000', '#dc6465', '#747474'
    ],
    column: [
        '#c10001', '#850001', '#000000', '#dc6465', '#747474'
    ],
    bar: [
        '#c10001', '#850001', '#000000', '#dc6465', '#747474'
    ],
    accent: '#c10001'
};

// SPECIAL 'non-svg' ATTRIBUTES:
// padding-x: applied to the SVG (affects svg > child) and 'text' elements (dressing/index.js does this)
// padding-y: applied to the SVG (affects svg > child) and 'text' elements (dressing/index.js does this)
// padding:   applied to 'text' elements (dressing/index.js does this)
// align:     applied to 'text' elements (dressing/index.js does this)
// background:applied to 'text' elements (dressing/index.js does this)
// border:    applied to 'line' and 'path' elements (dressing/index.js does this)

module.exports.theme = [
    {
        'selector': 'path.accent, line.accent, rect.accent',
        'attributes': {
            'stroke': colours.accent
        }
    },
    {
        'id': 'svg',
        'selector': 'svg',
        'attributes': {
            'background': '#ffffff'
        }
    },
    //lines
    {
        'id': 'lines',
        'selector': 'path.line, line.key__line',
        'attributes': {
            'fill': 'none',
            'stroke-linejoin': 'round',
            'stroke-linecap': 'round'
        }
    },
    ////Columns
    //{   'id': 'columns',
    //    'attributes': {
    //        'stroke': 'none'
    //    }
    //},
    ////Bars
    //{   'id': 'bars',
    //    'attributes': {
    //        'stroke': 'none'
    //    }
    //},
    {
        'id': 'null-label',
        'attributes': {
            'text-anchor': 'middle',
            'font-size': 10,
            'fill': 'rgba(0, 0, 0, 0.4)'
        }
    },

    //text
    {   'id': 'chart-title',
        'attributes': {
            'font-family': 'MetaSerif, Georgia',
            'font-size': 18,
            'fill': 'rgba(0, 0, 0, 0.8)'
        }
    },
    {   'id': 'chart-subtitle',
        'attributes': {
            'font-family': 'MetaSerif, Georgia',
            'font-size': 12,
            'fill': 'rgba(0, 0, 0, 0.5)'
        }
    },
    {   'id': 'chart-source',
        'attributes': {
            'font-family': 'MetaSerif, Georgia',
            'font-size': 10,
            'line-height': 12,
            'fill': 'rgba(0, 0, 0, 0.5)'
        }
    },
    {   'id': 'chart-footnote',
        'attributes': {
            'font-family': 'MetaSerif, Georgia',
            'font-size': 12,
            'line-height': 15,
            'fill': 'rgba(0, 0, 0, 0.5)'
        }
    },
    {   'id': 'key',
        'attributes': {
            'font-family': 'MetaSerif, Georgia',
            'font-size': 12,
            'line-height': 16,
            'fill': 'rgba(0, 0, 0, 0.5)',
            'padding-y': 8
        }
    },
    {   'id': 'independent-ticks',
        'attributes': {
            'shape-rendering': 'crispEdges',
            'stroke': 'rgba(0, 0, 0, 0.3)',
            'stroke-dasharray': 'none'
        }
    },
    {   'id': 'dependent-ticks',
        'attributes': {
            'shape-rendering': 'crispEdges',
            'stroke': 'rgba(0, 0, 0, 0.1)',
            'stroke-dasharray': '2 2'
        }
    },
    {   'id': 'origin-ticks',
        'attributes': {
            'shape-rendering': 'crispEdges',
            'stroke': 'rgba(0, 0, 0, 0.3)',
            'stroke-dasharray': 'none'
        }
    },
    {   'id': 'axis-text',
        'attributes': {
            'font-size': 12,
            'font-family': 'MetaSerif, Georgia',
            'stroke': 'none',
            'fill': '#757470'
        }
    },
    {   'id': 'axis-secondary-text',
        'selector': '.axis .secondary text',
        'attributes': {
            'font-size': 10,
            'fill': '#757470'
        }
    },
    {   'id': 'chart-logo',
        'attributes': {
            'display': 'none'
        }
    }
];
module.exports.theme.colours = colours;
