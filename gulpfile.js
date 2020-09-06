var gulp = require('gulp');
var sass = require('gulp-sass');
babel = require('gulp-babel');
concat = require('gulp-concat'); // It is mainly used to concatenate files
cleanCSS = require('gulp-clean-css'); // Process CSS files to minimize size.
uglify = require('gulp-uglify'); // Minimizes the size of Javascript files and makes them difficult to read, making them more "ugly"

gulp.task('default', function(){
    //.scss in the root folder (project).
    //The * pattern is a wildcard that matches any pattern in the current directory. 
    //In this case, we’re matching any files ending with .scss in the root folder (project).
    gulp.src('src/*.CSS') // Tells the Gulp task what files to use for the task
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('pub/')); // Tells Gulp where to output the files once the task is completed
});
