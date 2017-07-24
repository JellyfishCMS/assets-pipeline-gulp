// configuration files
const  config        = require('./config.js');
// set the command directory at the root of the jellyfish project
process.chdir(config.context);
// key import
import gulp         from 'gulp';
import HubRegistry  from 'gulp-hub';
// gulp plugins
import del          from 'del';

/* Tell gulp to load and use the task defined the tasks folder */
gulp.registry(new HubRegistry(['./gulp-tasks/*.js']));

/* Sub-Tasks
=======================================================*/
const clean = () => del(config.output.folder);
export { clean };

const html = gulp.series('htmlTempating','htmlInject');
export { html };

/* Watcher
=======================================================*/
export function watch (done) {
  gulp.watch(config.entry.scripts, gulp.series('scripts', 'reload'));
  gulp.watch(config.entry.styles, gulp.series('styles', 'reload'));
  gulp.watch(config.entry.html, gulp.series('html', 'reload'));
  done()
}

/* Main tasks
=======================================================*/
const build = gulp.series(clean, gulp.parallel('styles', 'scripts'), 'html');
export { build };

const dev = gulp.series(clean, build, 'serve', watch);
export { dev };

export default build;
