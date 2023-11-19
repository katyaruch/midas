import fs from 'fs';
import fonter from 'gulp-fonter';//преобразование в ttf woff
import ttf2woff2 from 'gulp-ttf2woff2';//


export const otToTtf = ( ) => {
   //* ищем файлы шрифтов .otf
   return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
   //* конвертируем в ttf
   .pipe(fonter({
      formats: ['ttf']
   }))
   //* выгружаем в исходную папку
   .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = ( ) => {
   //* ищем файлы шрифтов .ttf
   return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
   //* конвертируем в ttf
   .pipe(fonter({
      formats: ['woff']
   }))
   //* выгружаем в исходную папку
   .pipe(app.gulp.dest(app.path.build.fonts))
   //* ищем файлы шрифтов .ttf
   .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
   .pipe(ttf2woff2())
   //* выгружаем в папку с результатом
   .pipe(app.gulp.dest(app.path.build.fonts))
}


export const fontsStyle = (params) => {

   let file_content = fs.readFileSync( + '/scss/fonts.scss');
      if (file_content == '') {

      fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
         return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
               
            let c_fontname;
               for (let i = 0; i < items.length; i++) {
               let fontname = items[i].split('.');
                  fontname = fontname[0];
               if (c_fontname != fontname) {
                  fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
               }
               c_fontname = fontname;
               }
            }
         })
      }
   }