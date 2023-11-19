import fileinclude from 'gulp-file-include'; // для подключение файлов
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'; // для конвертирования картинок в формат webp
import versionNumber from 'gulp-version-number'; // для избежания кэширования

export const regExpReplaceImg = /@img\//g

export const html = () => {
   return app.gulp.src(app.path.src.html)
      .pipe(fileinclude())
      .pipe(app.plugins.replace(regExpReplaceImg, './images/'))
      // .pipe(
      //    app.plugins.if(
      //       app.isBuild,
      //       webpHtmlNoSvg()
      //    )
      // )
      .pipe(
         app.plugins.if(
            app.isBuild,
               versionNumber({
                  'value': '%DT%',
                  'append': {
                     'key': '_v',
                     'cover': 0,
                     'to': [
                        'css',
                        'js'
                     ]
                  },
                  'output': {
                     'file': 'gulp/version.json'
                  }
               })
         )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
}