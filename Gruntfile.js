module.exports = function (grunt) {
    grunt.initConfig({
      uglify: {
        release:{
          files: {
            'js/jquery.min.js': 'js/jquery.js'
          }
        }       
      },
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {  
        'rectangle.min.css': 'rectangle.css'
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify:release']);

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin']); 

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']); 
  };