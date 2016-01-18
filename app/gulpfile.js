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
  snScss: 'views/snippets/**/*.scss',
     css: 'dist/assets/css/',
 jadeOrg: 'views/snippets/**/*.jade'
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

gulp.task('snStyles', function() {
    gulp.src(paths.snScss, {base: './'})
        .pipe(sass({
          style: 'expanded'
        }))
        .pipe(gulp.dest( './' ))
});

gulp.task('compileJade', function () {
    gulp.src(paths.jadeOrg, {base: './'})
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest( './' ))
});

//Watch
gulp.task('default', function() {
    gulp.watch(paths.scss,['styles']);
    gulp.watch(paths.snScss,['snStyles']);
    gulp.watch(paths.jadeOrg,['compileJade']);
});
