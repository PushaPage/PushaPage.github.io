
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      watch = require('gulp-watch'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify-es').default,
      babel = require('gulp-babel'),
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      uncss = require('gulp-uncss'),
      htmlbeautify = require('gulp-html-beautify'),
      spritesmith = require('gulp.spritesmith'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace'),
      svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      merge = require('merge-stream'),
      browserSync = require('browser-sync').create();


//SASS---------->
gulp.task('sass', function() {
	return gulp.src('./app/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))	
	.pipe(gulp.dest('./app/css'))
})


//HTML BEAUTIFY---------->
gulp.task('htmlbeautify', function() {  
  let options = [
    {indentSize: 2}
  ]
  gulp.src('./app/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./dist/'))
});


//UNCSS-------->
gulp.task('uncss',function(){
	return gulp.src('./app/css/main.css')
	.pipe(uncss({
            html: ['./app/index.html']
        }))	
	.pipe(gulp.dest('./app/css/'))

})

//BABEL------>
gulp.task('babel', function (){
    return gulp.src('./app/js/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(sourcemaps.write('./')) 
        .pipe(gulp.dest('./app/js'));
});


//AUTOPREFIX------>
gulp.task('autoprefix', function() {
	return gulp.src('./app/css/main.css')
   .pipe(sourcemaps.init())
	 .pipe(autoprefixer({
	 		overrideBrowserslist:  ['IE 11', 'Safari 10', 'Firefox 57', 'Opera 50', 'Chrome 64', 'Edge 16'],      
            cascade: false
        }))
    .pipe(cleanCSS())    
    .pipe(rename('main.min.css'))
	 	.pipe(sourcemaps.write('./')) 
    .pipe(gulp.dest('./app/css'))
});


//MINCSS---------->
gulp.task('mincss', function() {
	return gulp.src('./app/css/main.css')	
	  .pipe(sourcemaps.init())
    .pipe(cleanCSS())    
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write('./'))         
  	.pipe(gulp.dest('./app/css/'))
});


//MINNIFY JS------>
gulp.task('minify', function () {
    return gulp.src('./app/js/main.js')
    	  .pipe(sourcemaps.init())        
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./')) 
        .pipe(gulp.dest('./app/js/'))
});


//SPRITE-------->
gulp.task('sprite', function () {
  var spriteData = gulp.src('./app/img/sprites/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('./app/img/'));
});


//SVG SPRITE----------->
gulp.task('svg-sprite', function (){

  return gulp.src('./app/img/sprites/svg/*.svg')
      .pipe(svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(cheerio({
        run: function ($) {
             $('[fill]').removeAttr('fill');
             $('[stroke]').removeAttr('stroke');
             $('[style]').removeAttr('style');
        }
      }))
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
        mode: {
            symbol: {
              sprite: 'svg-sprite.svg'
            }
        }
      }))
      .pipe(gulp.dest('./app/img/'));
});


//SERVE--------->
gulp.task('serve', function(){
	browserSync.init({
		server: './app'		
	})
	browserSync.watch('./app/**/*.*').on('change', browserSync.reload);
})


//WATCH----->
gulp.task('watch', function(){
	gulp.watch('./app/sass/*.scss', gulp.series('sass', 'autoprefix', 'babel'))
})



//DEV---------->
gulp.task('dev', gulp.series('sass',  gulp.parallel('watch', 'serve')));



//BUIlD-------->
gulp.task('build', function() {
  return merge([
      gulp.src('./app/index.html').pipe(gulp.dest('./dist/')),
      gulp.src('./app/css/*.min.css').pipe(gulp.dest('./dist/css')),
      gulp.src('./app/js/*.min.js').pipe(gulp.dest('./dist/js')),
      gulp.src('./app/favicon/*').pipe(gulp.dest('./dist/favicon')),
      gulp.src('./app/img/*').pipe(gulp.dest('./dist/img')),
      gulp.src('./app/fonts/*/*.*').pipe(gulp.dest('./dist/fonts'))
  ]);
});






