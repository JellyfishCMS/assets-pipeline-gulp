// configuration files
const  config        = require('../config.js');
import gulp         from 'gulp';

import browserSync  from 'browser-sync';

const server = browserSync.create();

/**
** functions dedicated run and controle the dev-server
****************************/

export function serve(done) {
  server.init({
    server: {
      baseDir: config.output.html
    }
  });
  done();
}

export function reload(done) {
  server.reload();
  done();
}

gulp.task('reload', reload);
gulp.task('serve', serve);
