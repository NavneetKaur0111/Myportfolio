const { src, dest, parallel, series } = require("gulp");
const del = require("del");

function cleanTask() {
  return del("dist");
}

function htmlTask() {
  return src("src/*.html")
    .pipe(dest("dist"));
}

function stylesTask() {
  return src("src/styles/*.css")
    .pipe(dest("dist/styles"));
}

function scriptsTask() {
  return src("src/scripts/*.js")
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
