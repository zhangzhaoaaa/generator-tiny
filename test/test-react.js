/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('tiny:react', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../react'))
      .inDir('/home/mike/Documents/TestData/generator/testing')
      .withArguments(['settings/react'])
      .withPrompts({
        resourcesPath: "./resources",
        testingPath: './develop'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'resources/javascripts/views/settings/reactApp.js',
      'develop/app/settings/reactAppTest.html',
      'develop/test/settings/reactApp-unitTest.js',
      'develop/test/settings/reactApp-endToEndTest.js'
    ]);
  });
});
