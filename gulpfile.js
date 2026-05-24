import gulp from 'gulp';
import shell from 'gulp-shell';

// Build
gulp.task("build", shell.task("parcel build index.html"));

gulp.task("parcel server", shell.task("parcel index.html"));

// Tests
gulp.task("unit test", shell.task("mocha test/*.test.js"));

gulp.task("End to End test", shell.task("npx cypress run"));

gulp.task("test", gulp.series("unit test", "End to End test"));

gulp.task("default", gulp.series("build", "parcel server"));