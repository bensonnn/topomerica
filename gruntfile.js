module.exports = function(grunt) {

  var LIVERELOAD_PORT = 35728

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
      compass: {
        // We watch and compile sass files as normal but don't live reload here
        files: 'src/css/*.{scss,sass}',
        tasks: ['compass:dev'],
      },
      livereload: {
        files: ['src/*.js',
                'src/*.html',
                'src/css/*.css'],
        options: {
          livereload: LIVERELOAD_PORT
        },
      },
      configFiles: {
        files: [ 'Gruntfile.js']
      }
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
    },

    compass: {
      dev: {
        options: {
          sassDir: 'src/css',
          cssDir: 'src/css',
          debugInfo: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('install', function(arg){
    grunt.task.run(['shell:install:' + arg, 'bowerInstall'])
  })
};
