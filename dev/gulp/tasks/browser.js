const
	gulp = require('gulp'),
	config = require('../config'),
	browser = require("browser-sync");


gulp.task("browser", function() {
    browser({
        notify: false,
        server: {
            baseDir: config.dir.tmp,
            routes: {
                '/': 'template'
            }
        }
    });
});