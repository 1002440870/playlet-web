import gulp from 'gulp';
import zip from 'gulp-zip';
import sftp from 'gulp-sftp-up4';
import shell from 'gulp-shell';

// 1. 编译dist文件
gulp.task('build', shell.task('vite build'));

// 2. 压缩dist文件
gulp.task('zip', function () {
    return gulp.src('dist/**/*')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('.'));
});

// 3. 上传到远程服务器上
// gulp.task('upload', () => {
//     return gulp.src('dist.zip').pipe(sftp({
//         host: '',
//         user: '',
//         password: '',
//         remotePath: ''
//     }));
// });

gulp.task('deploy', gulp.series('build', 'zip', 'upload'));