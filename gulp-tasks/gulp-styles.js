import gulp         from 'gulp';
import sass         from 'gulp-sass';
import cleanCSS     from 'gulp-clean-css';
import concat       from 'gulp-concat';
import rename       from 'gulp-rename';
import debug        from 'gulp-debug';

import config       from '../config.js';

/**
** GULP tasks dedicated to process styles files
****************************/

export function styles_sass() {
  return gulp.src(paths.styles.src)
    .pipe(debug())
    .pipe(sass())    // CSS preprocessor
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.output.styles));
}

gulp.task('styles', styles_sass);
