var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require ('gulp-postcss'),
autoprefixer = require ('autoprefixer'),
cssvars = require ('postcss-simple-vars'),
nested = require ('postcss-nested'),
cssImport = require ('postcss-import');


gulp.task('default', function(){
  console.log("hurray , you have just set a gulp task test");
});

gulp.task('html', function(){
  console.log("this is important stuff");
} );

gulp.task('styles', function(){
  return  gulp.src('./app/assets/styles/style.css') 
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
} );
gulp.task('watch', function(){

  watch('./app/index.html', function() {
    gulp.start('html');
  } );

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
