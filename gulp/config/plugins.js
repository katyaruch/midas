import replace from 'gulp-replace';//* поиск и замена
import browsersync from 'browser-sync'
import newer from 'gulp-newer' //* плагин для обновления картинок.
import ifPlugin from 'gulp-if'

export const plugins = {
   if: ifPlugin,
   replace,
   browsersync,
   newer
}