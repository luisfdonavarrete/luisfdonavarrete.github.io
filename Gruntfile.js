module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: {
                force: true
            },
            js:    ["dist/assets/js/"],
            css:   ["dist/assets/css/"],
            assets: [
                "dist/assets/*",
                "!dist/assets/.gitignore"
            ]
        },
        concat: {
            options: {
                separator: ';'
            },
            script: {
                src: [
                    'node_modules/bootstrap/js/collapse.js',
                    'node_modules/bootstrap/js/scrollspy.js',
                    // ...more foundation JS you might want to add
                    'develop/js/script.js'
                ],
                dest: 'dist/assets/js/script.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/assets/js/script.min.js': ['dist/assets/js/script.js']
                }
            }
        },
        cssmin: {
            foundation: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/bootstrap/dist/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/assets/css',
                    ext: '.min.css'
                }]
            },
            appStyles: {
                files: [{
                    expand: true,
                    cwd: 'develop/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/assets/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            grunt: { 
                files: ['Gruntfile.js'], 
                tasks: ['default'] 
            },
            scripts: {
                files: ['develop/js/**/*.js'],
                tasks: ['concat','uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['develop/css/**/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false
                },
            }
        },
        
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    
    grunt.registerTask('cssTask', ['clean:css', 'cssmin']);
    grunt.registerTask('jsTask',  ['clean:js', 'concat', 'uglify']);
    grunt.registerTask('default',  ['clean', 'cssTask', 'jsTask', 'watch']);

};