'use strict';

var  gulp = require('gulp'),
     sass = require('gulp-sass'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
     maps = require('gulp-sourcemaps'),
     jade = require('gulp-jade'),
    watch = require('gulp-watch');

var paths = {
    scss: 'dist/assets/sass/*.scss',
     css: 'dist/assets/css/',
 jadeOrg: 'views/*.jade'
};

gulp.task('styles', function() {
    //.pipe(gulp.dest('dist/assets/css/'))
    gulp.src(paths.scss)
        //.pipe(sass().on('error', sass.logError))
        .pipe(sass({
          style: 'compressed'
        }))
        .pipe(gulp.dest(paths.css))
});

gulp.task('templates', function() {
    var YOUR_LOCALS = {};

    gulp.src('./views/*.jade')
      .pipe(jade({
        locals: YOUR_LOCALS
      }))
      .pipe(gulp.dest('./dist/'))
});

//Watch
gulp.task('default', function() {
    gulp.watch(paths.scss,['styles']);
    gulp.watch(paths.jadeOrg,['templates']);
});
