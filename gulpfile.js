const { watch, series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// Minify CSS
function minifyCSS() {
    return src('./mySite/static/mySite/styles/css/main.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename({extname:'.min.css'}))
    .pipe(dest('./mySite/static/mySite/styles/css/'));
}

// Minify JS
function minifyJS() {
    return src("./mySite/static/mySite/scripts/*.js")
        .pipe(rename({extname:'.min.js'}))
        .pipe(uglify())
        .pipe(dest("./mySite/static/mySite/scripts/minJS"));
}

// Minify HTML
function minifyHTML(){
  return src('./mySite/templates/mySite/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./mySite/templates/mySite/minHTML'));
}

function ConvertToWebp() {
    return src('./mySite/static/mySite/media/**/*')
        .pipe(webp())
        .pipe(dest(function (file) {
            return file.base;
        }))
}

function minifyIMG(){

    return src('./mySite/static/mySite/media/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 50, progressive: true}),
            imagemin.optipng({optimizationLevel: 8}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: true}
                ]
            })
        ]))
        .pipe(dest(function (file) {
            return file.base;
        }))
}

exports.build = series(minifyCSS, minifyJS, minifyHTML, ConvertToWebp, minifyIMG);
exports.default = function (){
    watch(
        './mySite/static/mySite/styles/scss/*.scss',
        series(minifyCSS)
    );
    watch(
        './mySite/static/mySite/scripts/*.js',
        series(minifyJS)
    );
     watch(
        './mySite/templates/mySite/*.html',
        series(minifyHTML)
    );
};


