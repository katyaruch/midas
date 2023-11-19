import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js'
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path,
   gulp,
   plugins
}
import {reset} from './gulp/tasks/reset.js'
import {copy} from './gulp/tasks/copy.js';
import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {scss} from './gulp/tasks/scss.js';
import {script} from './gulp/tasks/script.js';
import {images} from './gulp/tasks/images.js'; 
import {otToTtf, ttfToWoff} from './gulp/tasks/fonts.js'; 
import {svgSprites} from './gulp/tasks/svgSprites.js';

function watcher() {

   //* watch(путь к файлам, за которыми нужно следить, действие которое нужно выполнить)
   gulp.watch(path.watch.files, copy)
   gulp.watch(path.watch.html, html)
   gulp.watch(path.watch.scss, scss)
   gulp.watch(path.watch.script, script)
   gulp.watch(path.watch.images, images)

}

export { svgSprites }

const fonts = gulp.series(otToTtf, ttfToWoff)
const mainTasks = gulp.parallel(fonts, copy, html, scss, script, images)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

export {dev} 
export {build}

gulp.task('default', dev);