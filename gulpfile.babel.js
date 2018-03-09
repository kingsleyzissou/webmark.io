/** Gulpfile courtesy of:
 *  https://github.com/express-vue/express-vue-mvc-starter/blob/master/gulpfile.babel.js
 */

import gulp from 'gulp'
import sourceMaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import path from 'path'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import livereload from 'gulp-livereload'
import nodemon from 'gulp-nodemon'
import del from 'del'
import eslint from 'gulp-eslint'

const paths = {
  dest: './views/',
  es6: './vue/**/**/*.js',
  scss: './src/scss/*.scss',
  css: './public/css',
  assets: ['./app/assets/**/*', '!./app/assets/scss/**/*'],
  vue: ['./vue/**/*.vue'],
  convert: './converted/',
  source: path.join(__dirname, 'src')
}

gulp.task('clean', () => {
  return del(['dist'])
})

gulp.task('sass', ['clean'], () => {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.css))
    // .pipe(livereload())
})

gulp.task('vue', ['sass'], () => {
  return gulp.src(paths.vue)
    .pipe(gulp.dest(paths.dest))
    // .pipe(livereload())
})

gulp.task('babel', ['vue'], () => {
  const stream = gulp.src(paths.es6)
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(paths.dest))
    // .pipe(livereload())
  return stream
})



gulp.task('eslint', function () {
  return gulp.src(paths.es6)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('build', [
  'babel'
])

gulp.task('default', [
  'build'
])

// Watch task
// gulp.task('default', () => {
//   gulp.watch('src/scss/*.scss', ['styles'])
// })
