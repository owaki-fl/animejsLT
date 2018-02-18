const
	gulp = require('gulp'),
	config = require('../config'),
	del = require('del');

gulp.task('clean', function() {
    return del([
        config.dir.tmp,
        config.dir.build
    ]);
});

gulp.task('b:clean', function() {
    return del([
        config.dir.build
    ]);
});