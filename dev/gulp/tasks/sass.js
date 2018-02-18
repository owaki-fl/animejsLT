const
    gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    minifyCss = require("gulp-minify-css"),
    sourcemaps = require("gulp-sourcemaps"),
    plumber = require('gulp-plumber'),
    browser = require("browser-sync");

gulp.task('sass', function() {
    gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.dir.tmp))
    .pipe(browser.reload({stream:true}));
});

gulp.task('b:sass', function() {
    gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.dir.build));
});
