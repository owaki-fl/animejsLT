const
	gulp = require('gulp'),
	config = require('../config'),
	plumber = require('gulp-plumber'),
  browser = require("browser-sync"),
  uglify = require('gulp-uglify'),
	webpackStream = require("webpack-stream"),
	webpack = require('webpack'),
	webpackConfig = require("../webpack.config");


gulp.task('webpack', function() {
    return webpackStream(webpackConfig, webpack)
        .pipe(plumber())
        .pipe(gulp.dest(config.dir.tmp))
        .pipe(browser.reload({stream:true}));
});

gulp.task('b:webpack', function() {
    return webpackStream(webpackConfig, webpack)
        .pipe(uglify())
        .pipe(gulp.dest(config.dir.build));
});
