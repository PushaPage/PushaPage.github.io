
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      watch = require('gulp-watch'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify-es').default,
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      uncss = require('gulp-uncss'),
      htmlbeautify = require('gulp-html-beautify'),
      browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('./app/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))	
	.pipe(gulp.dest('./app/css'))
})

gulp.task('htmlbeautify', function() {  
  let options = [
    {indentSize: 2}
  ]
  gulp.src('./app/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public/'))
});


gulp.task('uncss',function(){
	return gulp.src('./app/css/main.css')
	.pipe(uncss({
            html: ['./app/index.html']
        }))	
	.pipe(gulp.dest('./app/css'))

})

gulp.task('auto', function() {
	return gulp.src('./app/css/main.css')
   .pipe(sourcemaps.init())
	 .pipe(autoprefixer({
	 		overrideBrowserslist:  ['IE 11', 'Safari 10', 'Firefox 57', 'Opera 50', 'Chrome 64', 'Edge 16'],
            cascade: false
        }))
	 	.pipe(sourcemaps.write('./')) 
    .pipe(gulp.dest('./app/autoprefixer/'))
});

gulp.task('mincss', function() {
	return gulp.src('./app/css/main.css')	
	  .pipe(sourcemaps.init())
    .pipe(cleanCSS())    
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write('./'))         
  	.pipe(gulp.dest('./app/css/'))
});

gulp.task('minify', function () {
    return gulp.src('./app/js/main.js')
    	  .pipe(sourcemaps.init())        
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./')) 
        .pipe(gulp.dest('./app/js/'))
});



gulp.task('serve', function(){
	browserSync.init({
		server: './app'		
	})
	browserSync.watch('./app/**/*.*').on('change', browserSync.reload);
})

gulp.task('watch', function(){
	gulp.watch('./app/sass/*.scss', gulp.series('sass', 'auto'))
})

gulp.task('dev', gulp.series('sass',  gulp.parallel('watch', 'serve')));