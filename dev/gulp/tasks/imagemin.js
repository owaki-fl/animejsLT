const
	gulp = require('gulp'),
	config = require('../config'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');


gulp.task('b:imagemin', function() {
    return gulp.src(config.imagemin.src)
		.pipe(imagemin(
      {
        progressive: true,
      },
      [pngquant({quality: '65-80', speed: 1})]
    ))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dir.build));
});
