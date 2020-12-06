const { src, dest, parallel, series } = require("gulp");
const del = require("del");
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;

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
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(dest("dist/styles"));
}

function scriptsTask() {
  return src("src/scripts/*.js")
    .pipe(uglify())
    .pipe(dest("dist/scripts/"));
}

function imagesTask() {
  return src("src/images/*")
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
