const gulp = require('gulp')
const uglify = require('gulp-uglify')

gulp.task('hello', (done)=> {
    console.log('hello task!');
    done();
})

gulp.task('copy', (done)=>{
    gulp.src('./src/**/*.js')
    .pipe(gulp.dest('dist'));
    done();
})

gulp.task('minify-js', (done)=> {
    gulp.src('./src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
    done();
})

gulp.task('default', gulp.series('hello', 'minify-js'))