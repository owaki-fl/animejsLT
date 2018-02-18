const
	gulp = require('gulp'),
	config = require('../config'),
	runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    return runSequence(
        'b:clean',
        ['b:ejs', 'b:sass', 'b:webpack', 'b:imagemin'],
        'b:copy',
        callback
    );
});
