import gulp         from 'gulp';
import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import babel        from 'gulp-babel';
import debug        from 'gulp-debug';

import paths        from '../paths.json';

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(debug())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

gulp.task('scripts', scripts);
