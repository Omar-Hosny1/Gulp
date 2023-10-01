const gulp = require("gulp");
const concat = require("gulp-concat");
const prefix = require("gulp-autoprefixer");

// First Task
gulp.task("firstTask", async () => {
  return gulp.src("project/*.*").pipe(gulp.dest("dist/copy"));
});

// Second Task
gulp.task("Concat_All_CSS_Files_To_Only_One_File", async () => {
  return gulp
    .src("project/*.css")
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist"));
});

// Third Task
gulp.task("Concat_All_CSS_Files_To_Only_One_File_And_Prefixes", async () => {
  return gulp
    .src("./project/*.css")
    .pipe(prefix())
    .pipe(concat("main.css"))
    .pipe(gulp.dest("./dist"));
});
