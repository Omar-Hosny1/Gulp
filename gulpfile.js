const gulp = require("gulp");
const concat = require("gulp-concat");

// First Task
gulp.task("firstTask", async () => {
    return gulp.src("project/*.*").pipe(gulp.dest("dist/copy"))
})


// Second Task
gulp.task("Concat_All_CSS_Files_To_Only_One_File", async () => {
    return gulp.src("project/*.css")
        .pipe(concat("main.css"))
        .pipe(gulp.dest('dist'))
})