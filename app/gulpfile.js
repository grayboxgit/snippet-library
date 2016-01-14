'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
   watch = require('gulp-watch');

gulp.task('styles', function() {
  gulp.src('dist/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css/'))
});

//Watch
gulp.task('default', function() {
  gulp.watch('dist/assets/sass/*.scss',['styles']);
});
