
exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'jasmine',
  specs: ['./e2e/**/*.spec.ts'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    print: function () {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    const { SpecReporter } = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' } }));
  }
};
