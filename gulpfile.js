var gulp = require('gulp');
// подключаем gulp-sass
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['sass']);
    // другие ресурсы
});
