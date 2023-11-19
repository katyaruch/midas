import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve()); // название текущей папки проекта

const buildFolder = './dist';
const srcFolder = './src';


export const path = {
   build: {
      script: `${buildFolder}/script/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/images/`,
      svg: `${buildFolder}/images/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files`,
   },
   src: {
      //**  - две звезды - значит, что мы проверяем файлы в любых вложенностях
      //*.*  - [любое название файлов].[любой формат файлов]
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/style.scss`,
      images: `${srcFolder}/images/**/*.{jpg,jpeg,webp,png,psd,gif}`,
      svg: `${srcFolder}/images/**/*.svg`,
      script: `${srcFolder}/script/index.js`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`
   },
   watch: {//* - мы хотим, чтобы все изменения происходили автоматически
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/**/*.scss`,
      images: `${srcFolder}/images/**/*.{jpg,jpeg,webp,png,psd,gif,svg}`,
      script: `${srcFolder}/script/**/*.js`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder,
   srcFolder,
   rootFolder,
   ftp: ``
}