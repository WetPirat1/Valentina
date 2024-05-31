const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

const paths = {
    styles: {
        src: ['node_modules/animate.css/animate.css', 'src/styles/**/*.scss', 'src/styles/**/*.sass'],
        dest: 'dist/styles/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    }
};

function clean() {
    return del(['dist']);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(clean, styles, watch);

exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = build;
