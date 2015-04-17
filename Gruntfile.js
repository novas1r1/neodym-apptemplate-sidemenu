module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
          files: [ "js/**/**/*.js"],
          tasks: [ 'browserify' ]
    },
    browserify: {
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js'
        }
    },
    jshint: {
        all: ['Gruntfile.js', 'www/js/controllers/**/*.js', 'www/js/services/**/*.js', 'www/js/directives/**/*.js', 'www/js/filters/**/*.js', 'www/js/misc/**/*.js'],
        options: {
            reporter: require('jshint-html-reporter'),
            reporterOutput: 'www/misc/jshint/jshint-report.html'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-browserify');

  //how to?
  grunt.registerTask('browser', ['browserify']);

  //working
  grunt.registerTask('analyze', ['jshint']);

  //working
  grunt.registerTask('test', ['karma']);

  grunt.registerTask('default', ['jshint', 'karma']);
};