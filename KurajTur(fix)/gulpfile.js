
	const gulp = require('gulp'),
	      sass = require('gulp-sass'),
	      sourcemaps = require('gulp-sourcemaps'),
	      watch = require('gulp-watch'),
	      autoprefixer = require('gulp-autoprefixer'),
	      cleanCSS = require('gulp-clean-css'),
	      rename = require('gulp-rename'),
	      uncss = require('gulp-uncss'),
	      browserSync = require("browser-sync").create();

	gulp.task('sass', function(){
		return gulp.src('./app/sass/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./'))	
		.pipe(gulp.dest('./app/css'))
	})

	gulp.task('uncss',function(){
		return gulp.src('./app/css/main.css')
		.pipe(uncss({
	            html: ['./app/index.html']
	        }))	
		.pipe(gulp.dest('./app/css'))

	})

	gulp.task('auto', function(){
		return gulp.src('./app/css/main.css')
		 .pipe(autoprefixer({
		 		overrideBrowserslist:  ['IE 11', 'Safari 10', 'Firefox 57', 'Opera 50', 'Chrome 64', 'Edge 16'],
	            cascade: false
	        }))
	        .pipe(gulp.dest('./app/autoprefixer/'))
	});

	gulp.task('mincss', function(){
		return gulp.src('./app/css/main.css')	
		.pipe(sourcemaps.init())
	    .pipe(cleanCSS())
	    .pipe(sourcemaps.write())
	    .pipe(rename('main.min.css'))        
	  	.pipe(gulp.dest('./app/css/'))
	});





	gulp.task('serve', function(){
		browserSync.init({
			server: './app'		
		})
		browserSync.watch('./app/**/*.*').on('change', browserSync.reload);
	})

	gulp.task('watch', function(){
		gulp.watch('./app/sass/*.sass', gulp.series('sass', 'auto'))
	})

	gulp.task('dev', gulp.series('sass',  gulp.parallel('watch', 'serve')));