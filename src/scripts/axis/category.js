var d3 = require('d3');

function categoryAxis() {
    'use strict';

    var ticksize = 5;
    var a = d3.svg.axis().orient('left').tickSize(ticksize, 0);
    var lineHeight = 16;
    var userTicks = [];
    var yOffset = 0;
    var xOffset = 0;

    function isVertical() {
        return a.orient() === 'left' || a.orient() === 'right';
    }

    function axis(g) {
        g = g.append('g').attr('transform', 'translate(' + xOffset + ',' + yOffset + ')');
        g.call(a);
    }

    axis.tickSize = function (x) {
        if (!arguments.length) return ticksize;
        a.tickSize(-x);
        return axis;
    };

    axis.ticks = function (x) {
        if (!arguments.length) return a.ticks();
        if (x.length) {
            userTicks = x;
        }
        return axis;
    };

    axis.orient = function (x) {
        if (!arguments.length) return a.orient();
        a.orient(x);
        return axis;
    };

    axis.scale = function (x) {
        if (!arguments.length) return a.scale();
        a.scale(x);
        if (userTicks.length) {
            a.tickValues(userTicks);
        } else {
            a.ticks(Math.round((a.scale().range()[1] - a.scale().range()[0]) / 100));
        }
        return axis;
    };

    axis.yOffset = function (x) {
        if (!arguments.length) return yOffset;
        yOffset = x;
        return axis;
    };

    axis.xOffset = function (x) {
        if (!arguments.length) return yOffset;
        xOffset = x;
        return axis;
    };

    return axis;
}

module.exports = categoryAxis;
