'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('bootstrap_scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
};

exports.default = buildStyles;
exports.watch = function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
};