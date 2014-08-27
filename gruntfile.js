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
      },
      bowerInstall: {

        target: {

          src: [
            'src/index.html'  // .html support...
          ],

          // Optional:
          // ---------
          cwd: '',
          dependencies: true,
          devDependencies: false,
          exclude: [],
          fileTypes: {},
          ignorePath: '',
          overrides: {}
        }
      },
      shell: {                            
        install: {                  
          options: {                  
              stderr: false
          },
          command: function(package) {
            return 'bower install ' + package + ' --save'
          } 
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('install', function(arg){
    grunt.task.run(['shell:install:' + arg, 'bowerInstall'])
  })
};
