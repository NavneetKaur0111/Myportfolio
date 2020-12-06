const { src, dest, parallel, series } = require("gulp");
const del = require("del");
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function cleanTask() {
  return del("dist");
}

function htmlTask() {
  return src("src/*.html")
    .pipe(dest("dist"));
}

function stylesTask() {
  return src("src/styles/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]) )
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(dest("dist/styles"));
}

function scriptsTask() {
  return src("src/scripts/*.js")
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    } ))
    .pipe(uglify())
    .pipe(dest("dist/scripts/"));
}

function imagesTask() {
  return src("src/images/*")
    .pipe(image())
    .pipe(dest("dist/images"));
}

exports.clean = cleanTask;
exports.html = htmlTask;
exports.styles = stylesTask;
exports.scripts = scriptsTask;
exports.images = imagesTask;
exports.default = series(
  cleanTask,
  parallel(htmlTask, stylesTask, scriptsTask, imagesTask)
);
