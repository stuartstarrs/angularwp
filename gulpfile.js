// Grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    bower = require('gulp-bower');

    
// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
  return gulp.src('./library/scss/**/*.scss')
    .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

    .pipe(gulp.dest('./library/css/'))     
    .pipe(rename({suffix: '-min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./library/css/'))
});    
    
// JSHint, concat, and minify JavaScript
gulp.task('app-js', function() {
  return gulp.src([	
	  
        // Grab your custom scripts
  		  './library/js/app/*.js'
  		  
  ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./library/js'))
    .pipe(rename({suffix: '-min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./library/js'))
});    

// JSHint, concat, and minify JavaScript
gulp.task('vendor-js', function() {
  return gulp.src([	
  		  
          './library/vendor/angular/angular.js',
          './library/vendor/angular/angular-route.js',
          './library/vendor/angular/angular-resource.js',
          './library/vendor/angular/angular-animate.js',
          './library/vendor/angular/angular-cookies.js',
          
          './library/vendor/jquery/dist/jquery.js',
          
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('./library/js'))
    .pipe(rename({suffix: '-min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./library/js'))
});

// JSHint, concat, and minify Foundation JavaScript
gulp.task('bootstrap-js', function() {
  return gulp.src([	
  		  
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/button.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
    './library/vendor/bootstrap-sass/assets/javascripts/bootstrap/popover.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('bootstrap.js'))
    .pipe(gulp.dest('./library/js'))
    .pipe(rename({suffix: '-min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./library/js'))
});

// Update Foundation with Bower and save to /vendor
gulp.task('bower', function() {
  return bower({ cmd: 'update'})
    .pipe(gulp.dest('library/vendor/'))
});    

// Create a default task 
gulp.task('default', function() {
  gulp.start('styles', 'app-js', 'vendor-js', 'bootstrap-js');
});

// Watch files for changes
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./library/scss/**/*.scss', ['styles']);

  // Watch app-js files
  gulp.watch('./library/js/app/*.js', ['app-js']);
  
  // Watch bootstrap-js files
  gulp.watch('./library/vendor/bootstrap-sass/assets/javascripts/bootstrap/*.js', ['bootstrap-js']);

});
