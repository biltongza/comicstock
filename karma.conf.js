// Karma configuration
// Generated on Wed Jun 07 2017 14:23:49 GMT+0200 (South Africa Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'node_modules/angular-spinkit/build/angular-spinkit.js',
      'node_modules/angular-ui-router-uib-modal/angular-ui-router-uib-modal.js',
      'node_modules/oclazyload/dist/ocLazyLoad.js',
      'node_modules/angular-camelcase-to-human/camelcase-browser.js',
      'public/scripts/**/*.module.js',
      'public/scripts/**/*.config.js',
      'public/scripts/**/*.component.js',
      'public/scripts/**/*.service.js',
      'public/scripts/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],
    //browsers: ['ChromeDebugging'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333']
      }
    }
  })
}
