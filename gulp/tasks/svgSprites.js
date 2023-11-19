import svgSprite from 'gulp-svg-sprite';


export const svgSprites = () => {
   return app.gulp.src(app.path.src.svgicons)
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: `../icons/icon.svg`,
               //* создавать страницу с перечнем иконок
               example: true
            }
         }
      }))
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.plugins.browsersync.stream())
}