const { watch, series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');

// Minify CSS
function minifyCSS() {
    return src('./mySite/static/mySite/styles/css/main.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename({extname:'.min.css'}))
    .pipe(dest('./mySite/static/mySite/styles/css/'));
}

// Minify HTML
function minifyHTML(){
  return src('./mySite/templates/mySite/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./mySite/templates/mySite/minHTML'));
}

exports.build = series(minifyCSS, minifyHTML);
exports.default = function (){
    watch(
        './mySite/static/mySite/styles/scss/*.scss',
        series(minifyCSS)
    );
    watch(
        './mySite/templates/mySite/*.html',
        series(minifyHTML)
    );
};


