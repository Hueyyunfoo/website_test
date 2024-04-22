'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

// Compile SCSS files
function compileStyles() {
  return gulp.src('./src/assets/styles/main.scss') // Your main SCSS file
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/assets/styles'));
}

// Concatenate and minify JavaScript files
function buildScripts() {
  return gulp.src([
      './src/assets/scripts/main.js' // Your custom JavaScript files
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/scripts'));
}

// Watch for changes in SCSS and JavaScript files
function watch() {
  gulp.watch('./src/assets/styles/**/*.scss', compileStyles);
  gulp.watch('./src/assets/scripts/**/*.js', buildScripts);
}

exports.compileStyles = compileStyles;
exports.buildScripts = buildScripts;
exports.watch = watch;
