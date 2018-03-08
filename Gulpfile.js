const gulp = require('gulp');
const plumber = require('gulp-plumber');
const concatcss = require('gulp-concat-css');

gulp.task('modules:css', () => {
  return gulp.src([
    './node_modules/skeleton-css/css/normalize.css',
    './node_modules/skeleton-css/css/skeleton.css'
  ])
  .pipe(plumber())
  .pipe(concatcss('skeleton.css'))
  .pipe(gulp.dest('public/css'))
})

