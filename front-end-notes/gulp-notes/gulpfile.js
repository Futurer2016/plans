const gulp = require('gulp');

// html 压缩
// npm install gulp-htmlclean -D
const htmlClean = require('gulp-htmlclean');

// 图片 压缩
const imageMin = require('gulp-imagemin');

// js 压缩
const uglify = require('gulp-uglify');
// 去掉js中的调试语句
const stripDebug = require('gulp-strip-debug');
// js合并
var concat = require("gulp-concat");
// less 转换 css
const less = require('gulp-less');
// css 压缩
const cssClean = require('gulp-clean-css');
// 自动添加前缀
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// 开启本地服务
const connect = require('gulp-connect');

const isDev = process.env.NODE_ENV == 'development';

var folder = {
  src: 'src/',
  dist: 'dist/'
}

gulp.task('htmlTask', function() {
  gulp.src(golder.src + 'html/*')
    .pipe(connect.reload())
    // 压缩HTML
    .pipe(htmlClean())
    .pipe(gulp.dest(folder.dist + 'html/'));
});
gulp.task('imgTask', function() {
  gulp.src(golder.src + 'img/*')
    .pipe(imageMin())
    .pipe(gulp.dest(folder.dist + 'img/'));
});
gulp.task('cssTask', function() {
  gulp.src(golder.src + 'css/*')
    .pipe(connect.reload())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(cssClean())
    .pipe(gulp.dest(folder.dist + 'css/'));
});
gulp.task('jsTask', function() {
  gulp.src(golder.src + 'js/*')
    .pipe(connect.reload())
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest(folder.dist + 'js/'));
});
gulp.task('serverTask', function() {
  connect.server({
    port: 9090,
    // 开启页面自动刷新
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(folder.src + 'html/*', ['htmlTask']);
  gulp.watch(folder.src + 'css/*', ['cssTask']);
  gulp.watch(folder.src + 'js/*', ['jsTask']);
});

gulp.task('default', ['htmlTask', 'imgTask', 'cssTask', 'jsTask', 'serverTask', 'watch']);