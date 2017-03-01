var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade');

gulp.task('default', ['jaded'], function(){
	gulp.watch('lib/**/*.jade', ['jaded']);
});

 
gulp.task('jaded', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});