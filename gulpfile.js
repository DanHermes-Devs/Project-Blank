const { series, src, dest, watch } = require('gulp');

// CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Utilidades CSS
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

// Funcion que compila SASS
function css(done) {
    src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(rename({sufix: '.min'}))
        .pipe(dest('./build/css')); // Movemos el Css
    done();
}

function js(done) {
    src(paths.js)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({sufix: '.min'}))
      .pipe(dest('./build/js'))
    done();
}

// Procesar imagenes a Build
function imagenes(done) {
    src(paths.imagenes)
        .pipe(imagemin({optmizationLevel: 3})) // Optimizamos las imagenes
        .pipe(dest('./build/img')); // Movemos las imagenes
    done();
}

// Version Webp para las imagenes
function versionWebp(done) {
    const opciones = {
        quality: 50
    }
    src(paths.imagenes + '.{png,jpg,jepg}')
        .pipe(webp(opciones))
        .pipe(dest('./build/img')); // Movemos las imagenes
    done();
}

// Version Avif para las imagenes
function versionAvif(done) {
    const opciones = {
        quality: 50
    }
    src(paths.imagenes + '.{png,jpg,jepg}')
        .pipe(avif(opciones))
        .pipe(dest('./build/img')); // Movemos las imagenes
    done();
}


// Agregando un watch
function dev() {
    watch(paths.scss, css); // * = la carpeta actual - ** = todos los archivos con esa extension
    watch(paths.js, js );
    watch(paths.imagenes, imagenes); // Enviamos todas las imagenes con watch a Build
    watch(paths.imagenes, versionWebp); 
    watch(paths.imagenes, versionAvif); 
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.js = js;
exports.default = series(imagenes, versionWebp, versionAvif, js, css, dev);