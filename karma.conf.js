module.exports = function ( config ) {
    config.set({

        basePath: './',
        files: [
            'app/lib/angular/angular.js',
            'app/lib/angular-ui-router/release/angular-ui-router.js',
            'app/lib/angular-mocks/angular-mocks.js',
            'app/core/**/*.js',
            'app/domain/**/*.js'
        ],
        logLevel: config.LOG_INFO,
        autoWatch: false,
        frameworks: [ 'jasmine' ],
        browsers: ['PhantomJS'],
        //browsers: [ 'Chrome' ],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],
        junitReporter: {
            outputFile: './report/unit.xml',
            suite: 'unit'
        },
        singleRun: true,
        reporters: ['progress'],
        port: 9876,
        colors: true
    });
};
