import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';


export const images = () => {
   return app.gulp.src(app.path.src.images)
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(webp())
      //* выгружаем webp
      .pipe(app.gulp.dest(app.path.build.images))
      //* выгружаем сжатые файлы
      .pipe(app.gulp.src(app.path.src.images))
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(imagemin({
         progressive: true,
         svgoPlugins: [{ removeViewBox: false }],
         interplaced: true,
         optimizationLevel: 3 // 0 - 7
      }))
      .pipe(app.gulp.dest(app.path.build.images))
      //* выгружаем svg 
      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.build.svg))
      
      .pipe(app.plugins.browsersync.stream())
}