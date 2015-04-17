module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
          files: [ "www/js/**/**/*.js"],
          tasks: [ 'browserify' ]
    },
    browserify: {
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js',
            autoWatch: true
        }
    },
    jshint: {
        all: ['Gruntfile.js', 'www/js/controllers/**/*.js', 'www/js/services/**/*.js', 'www/js/directives/**/*.js', 'www/js/filters/**/*.js'],
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

  grunt.registerTask('browser', ['browserify']);

  grunt.registerTask('analyze', ['jshint']);

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('default', ['jshint', 'karma']);
};