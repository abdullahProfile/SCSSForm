const {src, dest, watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function styleTask() {

  return (src("index.scss"))
  .pipe(sass())
  .pipe(dest('css'))
}

function watchtasks(){
  watch(["index.scss"], styleTask);
}

exports.default=series(styleTask,watchtasks);