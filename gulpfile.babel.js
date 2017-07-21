// configuration files
const  config        = require('./config.js');
// set the command directory at the root of the jellyfish project
process.chdir(config.context);
// key import
import gulp         from 'gulp';
import HubRegistry  from 'gulp-hub';
// gulp plugins
import del          from 'del';
import browserSync  from 'browser-sync';

/* Tell gulp to load and use the task defined the tasks folder */
gulp.registry(new HubRegistry(['./gulp-tasks/*.js']));

/* Sub-Tasks
=======================================================*/
const clean = () => del(config.output.folder);
export { clean };

/* Watcher
=======================================================*/
export function runBrowserSync() {
  browserSync.create();

  browserSync.init({
      server: {
          baseDir: "./dist/"
      }
  });

  gulp.watch(paths.scripts.src, gulp.series('scripts')).on('change', browserSync.reload);
  gulp.watch(paths.styles.src, gulp.series('styles')).on('change', browserSync.reload);
  gulp.watch(paths.html.src, gulp.series('html')).on('change', browserSync.reload);
}

/* Main tasks
=======================================================*/
const html = gulp.series('htmlTempating','htmlInject');
export { html };

const build = gulp.series(clean, gulp.parallel('styles', 'scripts'), 'html');
export { build };

export default build;
