import webpack from 'webpack-stream'

export const script = () => {
   return app.gulp.src(app.path.src.script, {sourcemap: true})
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: 'script.min.js'
         }
      }))
      .pipe(app.gulp.dest(app.path.build.script))
      .pipe(app.plugins.browsersync.stream()) 
}