const CONF = {
    SOURCE_ROOT : 'dest',
    PUBLIC_ROOT : 'dest',

    SASS : {
        SOURCE : { DIR : '/assets/css.sass', EXT : 'scss' },
        OUTPUT : { DIR : '/assets/css' , MAP : '/' },
        OPTION : {
            outputStyle : 'compressed'
        }
    },

    BROWSERSYNC : {
        // OPTION : {
        //     proxy  : '192.168.66.101:80' // MAMP等別サーバのプロキシとして動作（SSIを使用したい場合など）
        // }
        OPTION : {
            server : { baseDir : 'dest' , index : 'index.html' }
        }
    }
};

var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var browsersync  = require('browser-sync');
var symlink      = require('gulp-sym');
let svgo = require('gulp-svgo');


gulp.task('sass', function () {
    gulp.src(CONF.SOURCE_ROOT + CONF.SASS.SOURCE.DIR + '/**/*.' + CONF.SASS.SOURCE.EXT)
        .pipe(sourcemaps.init())
        .pipe(sass(CONF.SASS.OPTION)).on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(CONF.SASS.OUTPUT.MAP))
        .pipe(gulp.dest(CONF.PUBLIC_ROOT + CONF.SASS.OUTPUT.DIR));
});


gulp.task('browsersync', function() {
    browsersync(CONF.BROWSERSYNC.OPTION);
});

gulp.task('watch', function() {
    gulp.watch(CONF.SOURCE_ROOT + CONF.SASS.SOURCE.DIR   + '/**/*.' + CONF.SASS.SOURCE.EXT   , ['sass']);
    gulp.watch(CONF.PUBLIC_ROOT + '/**/*.html' , browsersync.reload);
    gulp.watch(CONF.PUBLIC_ROOT + '/**/*.js'   , browsersync.reload);
    gulp.watch(CONF.PUBLIC_ROOT + '/**/*.css'  , browsersync.reload);
});

// gulp.src('html/assets')
//     .pipe(symlink('html.static/assets'))

gulp.task('images', () => {
    return gulp.src('src/img/*')
        .pipe(svgo())
        .pipe(gulp.dest('dest/img'));
});

gulp.task('default', [
    'sass',
    'browsersync',
    'watch'
])