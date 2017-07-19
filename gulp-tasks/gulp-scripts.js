import gulp         from 'gulp';
import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import babel        from 'gulp-babel';
import debug        from 'gulp-debug';

import config       from '../config.js';

/**
** GULP tasks dedicated to process scripts files
****************************/


export function scripts_es6() {
  return gulp.src(config.entry.scripts, { sourcemaps: true })
    .pipe(debug())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest(config.output.scripts));
}

gulp.task('scripts', scripts_es6);
