var gulp = require('gulp'),
jade = require('gulp-jade'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');



gulp.task('default', ['jaded', 'sass'], function(){
    gulp.watch('lib/**/*.jade', ['jaded']);
    gulp.watch('assets/sass/**/*', ['sass']);
});


gulp.task('jaded', function () {
  var locally = {dude: "brother"};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
    	pretty: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function() {
	gulp.src('assets/sass/style.scss')
	    .pipe(sass().on('error', sass.logError))
	       //.pipe(concat('main.css'))
	    .pipe(autoprefixer({
	        browsers: ['last 2 versions'],
	        cascade: false
	    }))
   		.pipe(gulp.dest('./dist'));
        //.pipe(gulp.dest('./dist/css'));
        //.pipe(gulp.dest('style.css'));	
})