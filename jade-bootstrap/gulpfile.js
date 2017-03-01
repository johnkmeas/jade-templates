var gulp = require('gulp'),
sass = require('gulp-sass'),
jade = require('gulp-jade');
//var data = require('./lib/data.json');


gulp.task('default', ['jaded'], function(){
    gulp.watch('lib/**/*.jade', ['jaded']);


});

gulp.task('jaded', function () {
  var locally = {dude: "brother"};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
    	pretty: true
      	//locals: data
    }))
    .pipe(gulp.dest('./'))
});