import gulp         from 'gulp';
import sass         from 'gulp-sass';
import cleanCSS     from 'gulp-clean-css';
import concat       from 'gulp-concat';
import rename       from 'gulp-rename';
import debug        from 'gulp-debug';

import paths        from '../paths.json';

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(debug())
    .pipe(sass())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

gulp.task('styles', styles);
