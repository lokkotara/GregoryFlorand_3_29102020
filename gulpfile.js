const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const minify = require('gulp-clean-css');


function scss2css() {
  return gulp.src('./scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(minify())
    .pipe(gulp.dest('./www/css'));
}

function autoUpdate(){
  browserSync.init({
    server: {
      baseDir : "./www"
    }
  });
  gulp.watch("./scss/main.scss", scss2css);
  gulp.watch("./scss/elements/*.scss", scss2css);
  gulp.watch("./www/").on("change", browserSync.reload);
}

exports.scss2css = scss2css;
exports.watch = autoUpdate;