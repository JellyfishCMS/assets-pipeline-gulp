import gulp         from 'gulp';
import debug        from 'gulp-debug';
import inject       from 'gulp-inject';
import bowerFiles   from 'main-bower-files';

import paths        from '../paths.json';

/*
* function dedicated to render throught a template engine
* or simple copy and pastes source files
*/
export function htmlTempating(done) {
  return gulp.src(paths.html.src)
    .pipe(debug())
    .pipe(gulp.dest(paths.html.dest));
}

/*
* Inject scripts and styles tag into html files
* Injection tags:
* <!-- inject:css --><!-- endinject -->
* <!-- inject:js --><!-- endinject -->
*/
export function htmlInject() {

  var sources = gulp.src([paths.styles.dest + "/**/*.css", paths.scripts.dest + "/**/*.js"], {read: false});

  return gulp.src(paths.html.dest+"/**/*.html")
    .pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest(paths.html.dest));
}

/*
* Inject vendors tags (styles and scripts) based on bower dependencies into html files
* Injection tags:
* <!-- bower:css --><!-- endinject -->
* <!-- bower:js --><!-- endinject -->
*/
export function bowerInject(){

  var sources = gulp.src(bowerFiles({
    debug: true
  }), {read: false});

  return gulp.src(paths.html.dest+"/**/*.html")
    .pipe(inject(sources, {name: 'bower', base: './bower_components'}))
    .pipe(gulp.dest(paths.html.dest));
}

gulp.task('htmlTempating', htmlTempating);
gulp.task('htmlInject', htmlInject);
gulp.task('bowerInject', bowerInject);
