var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    gulpCssmin  = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat');
    
const reload = browserSync.reload;
var paths = {
    html:['./index.html'],
    css:['./dist/blocks/**/*.css','!dist/blocks/styles.css'],
    script:['./dist/js/*.js']
  };


  
    gulp.task('cssMini' , function(){
        return gulp.src('app/blocks/**/*.css')
        .pipe( gulpCssmin() )
        .pipe(rename({suffix: '.min'}))
        .pipe( gulp.dest('dist/blocks/')  );
    });

    gulp.task('cssMiniResult' , function(){
        return gulp.src('./dist/css/all_styles.css')
        .pipe( gulpCssmin() )
        .pipe(rename({suffix: '.min'}))
        .pipe( gulp.dest('dist/css/')  );
    });

 

    gulp.task('scriptsCss', function() {
        return gulp.src( paths.css )
          .pipe(concat('all_styles.css'))
          .pipe( gulp.dest('./dist/css/') ) 
          .pipe( reload({stream: true} ));
          ;
      });

    gulp.task('browser-Sync' , function(){
        browserSync({
            server : { 
                baseDir: './dist/'
            },
            open: true,
            notify : true 
        });
        gulp.watch("dist/*.html").on('change', reload  );
        gulp.watch( ['./dist/blocks/**/*.css','!./dist/blocks/styles.css'] , gulp.series('scriptsCss','cssMiniResult') );
    });
  
    gulp.task('watch' , gulp.series('browser-Sync') , function( done ){
     //   gulp.watch( ['./app/blocks/**/*.css','!./app/blocks/styles.css'] , gulp.series('scriptsCss') );
    });