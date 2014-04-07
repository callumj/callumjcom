module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		copy: {
		  build: {
		    cwd: '.',
		    src: [ 'resume.html', 'index.html', 'style/**', 'images/**.png' ],
		    dest: 'build',
		    expand: true
		  }
		},
		exec: {
			resume: "phantomjs phantom.js"
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('build',['sass', 'copy', 'exec']);
}
