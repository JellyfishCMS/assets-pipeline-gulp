import gulp         from 'gulp';
import debug        from 'gulp-debug';
import path         from 'path'
import inject       from 'gulp-inject';

import nunjucks     from 'gulp-nunjucks'
import data         from 'gulp-data';
import fm           from 'front-matter';
import bowerFiles   from 'main-bower-files';

import config       from '../config.js';

/**
** GULP tasks dedicated to process html files
****************************/

/*
* function dedicated to render throught a template engine
* Inject the associated data based on the file name
*/
export function htmlTempating(done) {
  return gulp.src(config.entry.html)
    .pipe(debug())
    .pipe(data(function(file) {
      // Get data via JSON file, keyed on filename.
      return require( '../' + config.context + config.entry.data + path.basename(file.path, '.html') + '.json');
    }))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(config.output.html));
}

/*
* Inject scripts and styles tag into html files
* Injection tags:
* <!-- inject:css --><!-- endinject -->
* <!-- inject:js --><!-- endinject -->
*/
export function htmlInject() {

  var sources = gulp.src([config.output.styles + "/**/*.css", config.output.scripts + "/**/*.js"], {read: false});

  return gulp.src(config.output.html + "/**/*.html")
    .pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest(config.output.html));
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

  return gulp.src(config.output.html + "/**/*.html")
    .pipe(inject(sources, {name: 'bower', base: './bower_components'}))
    .pipe(gulp.dest(config.output.html));
}

gulp.task('htmlTempating', htmlTempating);
gulp.task('htmlInject', htmlInject);
gulp.task('bowerInject', bowerInject);
