// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{

      // leave Jasmine Spec Runner output visible in browser
      clearContext: false
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml', 'dots', 'junit'],
    junitReporter : {
      outputFile: 'test-results.xml'
    },
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,
    logLevel: config.LOG_DEBUG,

    // enable / disable watching  e and executing tests whenever any file changes
    autoWatch: false,
    browsers: ['PhantomJS_custom'],
    phantomjsLauncher: {

      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        flags: ['--load-images=false'],
        singleRun: true, 
        autoWatch: false
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
