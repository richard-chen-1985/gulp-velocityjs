var gulp = require('gulp'),
    rename = require('gulp-rename'),
    vm = require('./index.js');

var config = {
    // tpl root 
    'root': './vm/tpl',
    'encoding': 'utf-8',
    //global macro defined file
    'macro': 'src/vm/tpl/global-macro/macro.vm',
    'globalMacroPath': 'src/vm/tpl/global-macro',
    // test data root path
    'dataPath': './vm/data'
};

gulp.task('default', function() {
    gulp.src('./vm/tpl/index.vm')
        .pipe(vm(config))
        .pipe(rename({extname:'.html'}))
        .pipe(gulp.dest('./'));
})