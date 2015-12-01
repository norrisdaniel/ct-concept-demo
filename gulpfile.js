var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var includeSources = require('gulp-include-source');
var ngAnnotate = require('gulp-ng-annotate');
var ngConstant = require('gulp-ng-constant');
var karma = require('karma').server;
var watch = require('gulp-watch');

//  TODO:: isolate tasks into ./gulp/<task>.

gulp.task('scss', function ( ) {
    return gulp.src(['./app/**/*.scss','!./app/lib/**'])
      //.pipe(watch(['./app/**/*.scss','!./app/lib/**']))
      //.pipe(plumber())
      .pipe(sass({outputStyle: 'compact'}))
      .pipe(concat('app.compiled.css'))
      .pipe(gulp.dest('./app'));
});

gulp.task('config', function ( done ) {
    var env = 'dev';
    return gulp.src('./config/' + env + '.json')
      .pipe(ngConstant())
      .pipe(rename(env + "-properties.const.js"))
      .pipe(gulp.dest("./app/config/"))
      .on("error", console.log);

});

gulp.task('script-inject', function () {
    return gulp.src('./app/index.html')
      .pipe(includeSources())
      .on('error', console.log)
      //.pipe(rename('app.html'))
      .pipe(gulp.dest('app/'));
});


gulp.task('test', function ( done ) {
    karma.start({
        configFile: __dirname + '/my.conf.js',
        singleRun: true
    }, function () {
        done();
    });
});

gulp.task('default', [ 'config', 'script-inject' ]);