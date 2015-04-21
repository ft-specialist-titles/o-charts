var d3 = require('d3');
var utils = require('./date.utils.js');

module.exports = {
    intersection: function (a, b) {
        var overlap = (
        a.left <= b.right &&
        b.left <= a.right &&
        a.top <= b.bottom &&
        b.top <= a.bottom
        );
        return overlap;
    },
    overlapping: function (dElements) {
        var self = this;
        var bounds = [];
        var overlap = false;
        dElements.each(function (d, i) {
            var rect = this.getBoundingClientRect();
            var include = true;
            bounds.forEach(function (b, i) {
                if (self.intersection(b, rect)) {
                    include = false;
                    overlap = true;
                }
            });
            if (include) {
                bounds.push(rect);
            }
        });
        return overlap;
    },

    removeOverlappingLabels: function (g, selector) {
        var self = this;
        var dElements = g.selectAll(selector);
        var elementCount = dElements[0].length;
        var limit = 5;

        function remove(d, i) {
            var last = i === elementCount - 1;
            var previousLabel = dElements[0][elementCount - 2];
            var lastOverlapsPrevious = (last && self.intersection(previousLabel.getBoundingClientRect(), this.getBoundingClientRect()));
            if (last && lastOverlapsPrevious) {
                d3.select(previousLabel).remove();
            } else if (i % 2 !== 0 && !last) {
                d3.select(this).remove();
            }
        }

        while (self.overlapping(g.selectAll(selector)) && limit > 0) {
            limit--;
            g.selectAll(selector).each(remove);
            dElements = g.selectAll(selector);
            elementCount = dElements[0].length;
        }
    },

    calculateWidestLabel: function (dElements) {
        var labelWidth = 0;
        dElements.each(function (d) {
            labelWidth = Math.max(d3.select(this).node().getBoundingClientRect().width, labelWidth);
        });
        return labelWidth;
    },
    removeDayLabels: function (g, selector) {
        var dElements = g.selectAll(selector);
        var elementCount = dElements[0].length;

        function remove(d, i) {
            var d3This = d3.select(this);
            if (i !== 0 && i !== elementCount - 1 && d3This.text() != 1) {
                d3This.remove();
            }
        }

        dElements.each(remove);
    },
    render: function (scale, g) {

        var width = this.calculateWidestLabel(g.select('.tick text'));

        if (utils.unitGenerator(scale.domain())[0] == 'days') {
            this.removeDayLabels(g, '.primary text');
        } else {
            this.removeOverlappingLabels(g, '.primary text');
        }
        this.removeOverlappingLabels(g, '.secondary text');

        return {
            width: width
        };
    }
};
