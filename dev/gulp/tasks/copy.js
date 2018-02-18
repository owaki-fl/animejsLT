const
	gulp = require('gulp'),
	config = require('../config');

gulp.task('copy', function() {
    return gulp.src(config.copy.dir)
    .pipe(gulp.dest(config.dir.tmp));
});
 
gulp.task('b:copy', function() {
    return gulp.src(config.copy.build_dir ,{base: config.dir.assets})
    .pipe(gulp.dest(config.dir.build));
});