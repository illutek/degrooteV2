var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');


// //////////////////////////////////////////////
// Sass to css
// /////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('sass/styles.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('minifyCSS', function () {
    return gulp.src('css/styles.css')
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
});


// ///////////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('sass/**/*.{scss,sass}', ['sass']);
});

// ///////////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////////
gulp.task('default' , ['sass', 'watch']);