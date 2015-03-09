module.exports = function(config) {
    var karmaConfig = {
        basePath: '..',
        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'browserify'],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'test/**/*.js': ['browserify'],
            '_site/*.html': ['html2js']
        },
        coverageReporter: {
            dir : 'test/coverage/',
            reporters: [
                { type: 'html',
                    subdir: function(browser) {
                        return browser.toLowerCase().split(/[ /-]/)[0];
                    },
                    watermarks: {
                        statements: [75, 85],
                        lines: [75, 85],
                        functions: [75, 85],
                        branches:[50, 85]
                    }},
                { type: 'json-summary', subdir: '.', file: 'summary.json' }
            ]
        },
        files: [
            {pattern: '_site/**/vendor.*', included: true, served: true, watched: true},
            {pattern: '_site/**/*.*', included: true, served: true, watched: true},
            'test/**/*.spec.js'
        ],
        exclude: [
            '**/*.png',
            'src/**/*.requirejs.js',
            '**/*.min.js',
            'src/**/*.txt',
            'src/**/*.csv',
            'src/**/*.hbs'
        ]
    };
    var pkg = require('../package.json');
    var istanbul = require('browserify-istanbul');
    karmaConfig.browser = pkg.browser || {};
    karmaConfig["browserify-shim"] = pkg["browserify-shim"] || {};
    karmaConfig.browserify = pkg.browserify || {};
    if (karmaConfig.browserify.transform) {
        karmaConfig.browserify.transform.push('browserify-istanbul');
    } else {
        karmaConfig.browserify.transform = ['browserify-istanbul' ];
    }
    return config.set(karmaConfig);
};