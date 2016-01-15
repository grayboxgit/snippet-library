'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
    maps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
   watch = require('gulp-watch');

var paths = {
    scss: 'dist/assets/sass/*.scss',
    css: 'dist/assets/css/'
};

gulp.task('styles', function() {
    //.pipe(gulp.dest('dist/assets/css/'))
    gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css))
});

//Watch
gulp.task('default', function() {
    gulp.watch(paths.scss,['styles']);
});