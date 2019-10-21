
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uncss = require('gulp-uncss');
const browserSync = require("browser-sync").create();

gulp.task('sass', function(){
	return gulp.src('./app/sass/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))	
	.pipe(gulp.dest('./app/css'))
})

// gulp.task('uncss',function(){
// 	return gulp.src('./app/css/main.css')
// 	.pipe(uncss({
//             html: ['./app/index.html']
//         }))	
// 	.pipe(gulp.dest('./app/css'))

// })

gulp.task('auto', function(){
	return gulp.src('./app/css/main.css')
	 .pipe(autoprefixer({
	 		overrideBrowserslist:  ['last 25 versions', '> 1%',
    'IE 10'],
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