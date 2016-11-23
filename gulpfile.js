var protractor = require("gulp-protractor").protractor;
var spawn = require('child_process').spawn; 

//run webdriver method
function runWebdriver(callback) {
    spawn('webdriver-manager', ['start'], {
        stdio: 'inherit'
    }).once('close', callback);
}

//run protractor.config method
function runProtractorConfig() {
    gulp.src('./**/*movielist_spec.js')
        .pipe(protractor({
            configFile: 'protractor.config.js'
        }))
        .on('error', function (e) {
            throw e;
        });
}
//execute protractor.config after webdriver is executed
function runWebdriverProtractor(){
    runWebdriver(runProtractorConfig);
}
//put them into gulp task
gulp.task('run-protractor', runWebdriverProtractor);