module.exports = function(grunt) {

  var LIVERELOAD_PORT = 35729

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      connect: {
        server: {
          options: {
            base: 'src',
            livereload: LIVERELOAD_PORT,
            open: {
              target: 'http://localhost:8000'
            }
          }
        },
      },
      watch: {
        livereload: {
          options: {
            livereload: LIVERELOAD_PORT
          },
          files: [
            'src/*.js',
            'src/*.html',
          ],
          configFiles: {
            files: [ 'Gruntfile.js']
          }
        },
      }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('connect-livereload');

  // Default task(s).
  grunt.registerTask('dev', ['connect', 'watch']);
};
