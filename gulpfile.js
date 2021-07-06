

const project_folder = "dist";
const source_folder = "src";
const path = {
    build: {
        html: `${project_folder}/`,
        css: `${project_folder}/css`,
        js: `${project_folder}/js`,
        img: `${project_folder}/img`,
        fonts: `${project_folder}/fonts`,
    },
    src: {
        html: `${source_folder}/*.html`,
        scss: `${source_folder}/scss/style.scss`,
        css: `${source_folder}/css/**/*.css`,
        js: `${source_folder}/js/**/*.js`,
        img: `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
        fonts: `${source_folder}/fonts/**/*.{eot,ttf,svg,woff,woff2}`,
    },
    watch: {
        html: `${source_folder}/**/*.html`,
        scss: `${source_folder}/scss/**/*.scss`,
        css: `${source_folder}/css/**/*.css`,
        js: `${source_folder}/js/**/*.js`,
        img: `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
        fonts: `${source_folder}/fonts/**/*.{eot,ttf,svg,woff,woff2}`,
    },
    clean: `./${project_folder}/`
}
const   gulp                = require('gulp'),
        { src, dest }       = require('gulp'),
        browsersync         = require('browser-sync').create(),
        fileinclude         = require('gulp-file-include'),
        del                 = require('del'),
        scss                = require('gulp-sass')(require('sass')),
        autoprefixer        = require('gulp-autoprefixer'),
        imagemin            = require('gulp-imagemin');

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: `./${project_folder}/`
        },
        port: 8080,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        // .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.scss], scss_fn);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
    gulp.watch([path.watch.fonts], fonts);
}

function clean(params) {
    return del(path.clean);
}

function js() {
    return src(path.src.js)
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}
function css() {
    return src(path.src.css)
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}
function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream())
}
function images() {
    return src(path.src.img)
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function scss_fn() {
    return src(path.src.scss)
    .pipe(
        scss({
            outputStyle: "expanded"
        })
    )
    .pipe(autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
    }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

let build = gulp.series(clean, gulp.parallel(html, scss_fn, css, js, images, fonts))
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.css = css;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.scss_fn = scss_fn;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
