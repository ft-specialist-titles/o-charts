var bower = require('./bower.json');
var pkg = require('./package.json');

module.exports = {
    bower: bower,
    build: {
        fonts: true, // true or false. Set to false if you are doing your own thing in the fonts directory
        styles: 'sass', // 'sass'. less not yet available
        html: 'mustache',// 'mustache' or 'jade'.
        scripts: 'browserify' // 'browserify' or 'requirejs'
    },
    browserify: {
        insertGloabals : false,
        detectGlobals : false,
        noParse: [
            './bower_components/d3/d3.js'
        ],
        vendorBundle: [
            { file: './bower_components/d3/d3.js', expose: 'd3'}
        ]
    },
    test: 'karma',  // or false.  where your tests config, specs and reports are saved
    karma : {//or mocha not yet available
        config: './test/karma.conf.js',
        summary: './test/coverage/summary.json'
    },
    release: false,
    serve: 'staticApp', // `staticApp` or `nodeApp`
    staticApp: {
        server: { baseDir : '_site' },
        port: 3456
    },
    paths: {
        /*
        All paths also have `script`, `styles`, `fonts`, `icons` and `images` properties
        Feel free to specify a custom path i.e. `scripts: './src/js'`
        */
        "bower": {
            root: './bower_components',
            fonts: './bower_components/*/dist/fonts'
        },
        source: { //source files to build your component / site
            root: "./src"
        },
        demo: {
            root: "./demo"
        },
        dist : false,
        "site": { // Final build (Compiled demo + source) code pushed to your chosen release cloud i.e. AWS
            root: './_site'
        }
    },
    pkg: pkg
};