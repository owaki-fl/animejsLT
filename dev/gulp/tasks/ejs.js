const
	gulp = require('gulp'),
	config = require('../config'),
	ejs = require('gulp-ejs'),
	browser = require("browser-sync");

gulp.task('ejs', function() {
    gulp.src(config.ejs.src)
    .pipe(ejs({}, {}, {"ext": ".html"}))
    .pipe(gulp.dest(config.dir.tmp))
    .pipe(browser.reload({stream:true}));
});

gulp.task('b:ejs', function() {
    gulp.src(config.ejs.src)
    .pipe(ejs({}, {}, {"ext": ".html"}))
    .pipe(gulp.dest(config.dir.build));
});
