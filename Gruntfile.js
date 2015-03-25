module.exports = function(grunt) {

	// Project start
	
	grunt.grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat_css: {
			options: {
			  // Task-specific options go here. 
			},
			all: {
			  src: ["/**/*.css"],
			  dest: "styles.css"
			},
		},

	});
};