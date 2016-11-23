// Karma configuration
// Generated on Tue Apr 05 2016 18:13:12 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        './public/bower_components/angular/angular.js',
        './public/bower_components/angular-route/angular-route.js',
        './public/bower_components/angular-resource/angular-resource.js',
        './public/bower_components/angular-mocks/angular-mocks.js',
        
        './public/js/app.js',
        './public/js/ContactController.js',
        './public/js/ContactService.js',
        
        './public/jsunittest/Contact.controller.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
   


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //./Test/coverage/
    reporters: ['progress', 'html','coverage'],
 
    preprocessors: {  
        './public/js/ContactController.js': ['coverage']
    },
    coverageReporter: {  
        type: 'lcov',
            dir: 'coverage',
            subdir: '.'
    },
    htmlReporter: {
        outputFile: './report/Clientside-Report/Unittest/units.html',
			
        // Optional 
        pageTitle: 'Unit Tests',
        subPageTitle: 'A sample project description'
    },


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
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}