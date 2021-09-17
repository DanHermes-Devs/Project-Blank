const { series, src, dest, watch } = require('gulp');

// CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Funcion que compila SASS
function css(done) {
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('./build/css')); // Movemos el Css
    done();
}

// Funcion que compila SASS y minifica
function minifyCSS(done) {
    src('src/scss/app.scss')
        .pipe(sass({outputStyle: 'compressed'})) // Csmprimirmos el Css
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('./build/css')); // Movemos el Css
    done();
}

// Procesar imagenes a Build
function imagenes(done) {
    src('src/img/**/*')
        .pipe(imagemin({optmizationLevel: 3})) // Optimizamos las imagenes
        .pipe(dest('./build/img')); // Movemos las imagenes
    done();
}

// Version Webp para las imagenes
function versionWebp(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg,jepg}')
        .pipe(webp(opciones))
        .pipe(dest('./build/img')); // Movemos las imagenes
    done();
}

// Version Avif para las imagenes
function versionAvif(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg,jepg}')
        .pipe(avif(opciones))
        .pipe(dest('./build/img')); // Movemos las imagenes
    done();
}


// Agregando un watch
function dev() {
    watch('src/scss/**/*.scss', css); // * = la carpeta actual - ** = todos los archivos con esa extension
    watch('src/img/**/*', imagenes); // Enviamos todas las imagenes con watch a Build
}

exports.css = css;
exports.dev = dev;
exports.minifyCSS = minifyCSS;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);