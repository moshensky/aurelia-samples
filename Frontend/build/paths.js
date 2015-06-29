var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  jade: appRoot + '**/*.jade',
  style: 'styles/**/*.css',
  less: 'less/**/*.less',
  output: outputRoot,
  //sourceMapRelativePath: '../' + appRoot,
  sourceMapRelativePath: '/' + appRoot, // note by nikita: hacked for source maps proper generation
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};

