module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["calculator.js", "calculator.spec.js"],
    browsers: ["Chrome"],
    singleRun: true,
  });
};
