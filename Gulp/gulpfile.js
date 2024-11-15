// --------------------------------------------------------------------------------------------------------------------
/*
    Autora: Claudia Torres Cruz
    Actividad: Automarizar tareas con GULP
*/
// --------------------------------------------------------------------------------------------------------------------
const gulp = require('gulp');
const minifyCss  = require('gulp-minify-css');              // <-- minimizar ficheros css
const sourcemaps = require('gulp-sourcemaps');              // <-- generar sourcemaps
const uglify = require('gulp-uglify');                      // <-- minimizar archivos en general (usado para JS)
const imagemin = require('gulp-imagemin');                  // <-- minimizar imágenes
const browserSync = require('browser-sync').create();       // <-- sincronizar con el navegador
const htmlReplace = require('gulp-html-replace');           // <-- reemplazar el css y el js del index
const concat = require('gulp-concat');                      // <-- concatenar ficheros
const sass = require('gulp-sass')(require('sass'));         // <-- compilar sass en css

// --------------------------------------------------------------------------------------------------------------------
// TAREAS
// --------------------------------------------------------------------------------------------------------------------

// Tarea: Copiar y actualizar las rutas en el HTML
gulp.task('html', () => {
    return gulp.src('./src/*.html')  // Usar return para asegurar la espera
        .pipe(htmlReplace({
            'css': 'css/styles.css',
            'js': 'js/scripts.js',
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    return gulp.src(['./src/css/style1.css', './src/css/style2.css', './src/sass/styles.scss'])  
        .pipe(sourcemaps.init())  // Inicializar sourcemaps
        .pipe(sass().on('error', sass.logError)) 
        .pipe(concat('styles.css'))
        .pipe(minifyCss())  // Minificar el CSS
        .pipe(sourcemaps.write('./'))  // Especificar que se guarden en la misma carpeta
        .pipe(gulp.dest('./dist/css'))  
        .pipe(browserSync.stream());
});

// Tarea: Concatenar, minificar JS y generar un único archivo (scripts.js)
gulp.task('js', () => {
    return gulp.src('./src/js/*.js')  // Usar return para asegurar la espera
        .pipe(concat('scripts.js'))  // Concatenamos todos los JS en uno
        .pipe(uglify()) // Minificamos el archivo JS
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

// Tarea: Optimizar imágenes
gulp.task('images', () => {
    return gulp.src('./src/images/*', {encoding: false})  // encoding por una actualización que hacía que la imagen se rompiera
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
        .pipe(browserSync.stream());
});

// Tarea: Iniciar BrowserSync
gulp.task('serve', () => {
    browserSync.init({
        server: './dist',
    });

    gulp.watch('./src/*.html', gulp.series('html'));
    gulp.watch('./src/css/*.css', gulp.series('css'));
    gulp.watch('./src/js/*.js', gulp.series('js'));
    gulp.watch('./src/images/*', gulp.series('images'));
});

// Tarea por defecto
gulp.task('default', gulp.series('html', 'css', 'js', 'images', 'serve'));
