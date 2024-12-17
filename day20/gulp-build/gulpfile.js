var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('rollup-plugin-babel');
    rollup = require('gulp-rollup');

    const babelConfig = {
        "presets": [
          [
            "es2015",
            {
              "modules": false
            }
          ]
        ],
        "plugins": [
          "external-helpers"
        ],
        babelrc: false
      };

gulp.task('rollup', function () {
  gulp.src([
    './src/index.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(rollup(
    {output: { sourcemap: false }},
    {
    plugins: [
        babel(babelConfig),
        // resolveNodeModules(),
        // commonJs(),
    ],
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./build/'));
})