var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// Uglifies
gulp.task('script', function () {
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('assets/build/js'));
});

// sass style
gulp.task('styles', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest('assets/build/css'));
});

// live preview
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 5000
    });
});

gulp.task('run', ['styles', 'script', 'browser-sync']);

gulp.task('watch', function () {
    gulp.watch(['**/*.html'], browserSync.reload);
    gulp.watch(['assets/scss/**/*.scss'], browserSync.reload);
    gulp.watch(['assets/js/*.js'], browserSync.reload);
    gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['run', 'watch']);