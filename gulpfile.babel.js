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
// import Cache from 'gulp-file-cache'
import del from 'del'
// import ava from 'gulp-ava'
import eslint from 'gulp-eslint'

// import sassdoc from 'sassdoc'
// import converter from 'sass-convert'

// let cache = new Cache()

const paths = {
  dest: './views/',
  es6: './vue/**/**/*.js',
  scss: './src/scss/*.scss',
  css: './public/css',
  assets: ['./app/assets/**/*', '!./app/assets/scss/**/*'],
  vue: ['./vue/**/*.vue'],
  convert: './converted/',
  // tests: 'test/**/*.js',
  // Must be absolute or relative to source map
  source: path.join(__dirname, 'src')
}

gulp.task('clean', () => {
  return del(['dist'])
})

gulp.task('sass', ['clean'], () => {
  return gulp.src(paths.scss)
    // .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.css))
    .pipe(livereload())
})

gulp.task('sassdoc', () => {
  return gulp.src('./convert/**/*.sass')
    .pipe(converter({
      from: 'sass',
      to: 'scss'
    }))
    // .pipe(gulp.dest(paths.convert))
    .pipe(sassdoc())
})

gulp.task('vue', ['sass'], () => {
  return gulp.src(paths.vue)
    .pipe(gulp.dest(paths.dest))
    .pipe(livereload())
})

gulp.task('babel', ['vue'], () => {
  const stream = gulp.src(paths.es6)
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(livereload())
  return stream
})

gulp.task('watch', ['babel'], () => {
  livereload.listen({
    port: 35732
  })
  nodemon({
    script: 'app.js',
    stdout: true,
    watch: 'app',
    ext: 'js scss vue',
    exec: 'babel-node',
    tasks: ['clean', 'babel', 'vue', 'sass']
  }).on('restart', function onRestart () {
    // reload connected browsers after a slight delay
    setTimeout(function reload () {
      livereload.reload()
    }, 1500)
  })
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
  'watch'
])

// Watch task
// gulp.task('default', () => {
//   gulp.watch('src/scss/*.scss', ['styles'])
// })
