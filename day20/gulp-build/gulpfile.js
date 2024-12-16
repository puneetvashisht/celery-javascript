const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

// Paths
const paths = {
  src: 'src/**/*.js',
  esm: 'dist/esm/',
  cjs: 'dist/cjs/',
};

// Babel Configurations
const babelESM = {
  presets: [['@babel/preset-env', { modules: false }]], // Keep ES Modules
};

const babelCJS = {
  presets: [['@babel/preset-env', { modules: 'commonjs' }]], // Convert to CommonJS
};

// Task: Bundle ESM
gulp.task('bundle-esm', () => {
  return gulp
    .src(paths.src)
    .pipe(babel(babelESM))
    .pipe(gulp.dest(paths.esm));
});

// Task: Bundle CJS
gulp.task('bundle-cjs', () => {
  return gulp
    .src(paths.src)
    .pipe(babel(babelCJS))
    .pipe(gulp.dest(paths.cjs));
});

// Task: Rollup Bundling (Optional for Combined Files)
gulp.task('rollup-bundle', () => {
  return rollup({
    input: './src/index.js',
    format: 'cjs', // or 'cjs' for CommonJS output
    sourcemap: true,
  })
    .pipe(source('bundle.js')) // Name the output bundle
    .pipe(buffer())
    .pipe(gulp.dest('dist/rollup/')); // Output folder
});

// Default Task: Bundle Both ESM and CJS
gulp.task('default', gulp.series('bundle-esm', 'bundle-cjs'));
