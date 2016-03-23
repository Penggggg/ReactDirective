var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');


gulp.task('default', function(){
	gulp.src('r-input-checkbox/r-input-checkbox.js')
		.pipe(react())
		.pipe(babel({
			presets:['babel-preset-es2015']
		}))
		.pipe(gulp.dest('dest/'))
})