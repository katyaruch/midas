import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import { regExpReplaceImg } from './html.js'

import rename from 'gulp-rename'//плагин для редактирования

import cleanCss from 'gulp-clean-css'//* для сжатия файла
import webpcss from 'gulp-webpcss' //* для отображения WEBP изображений
import autoprefixer from 'gulp-autoprefixer'//* добавление префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'//* Меди запросы скнизу

const sass = gulpSass(dartSass)

export const scss = () => {
   return app.gulp.src(app.path.src.scss, { sourcemaps: true })
      .pipe(app.plugins.replace(regExpReplaceImg, '../images/'))
      .pipe(sass({
         outputStyle: 'expanded'
      }))
      .pipe(groupCssMediaQueries())
      // .pipe(webpcss({
      //    webpClass: '.webp',
      //    noWebpClass: '.no-webp'
      // }))
      .pipe(autoprefixer({
         grid: true,
         overrideBrowserlist: ['last 3 versions'],
         cascade: true
      }))
      //* раскоментировать, если нужен НЕ сжатый файл
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(rename({
         extname: '.min.css'
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
}