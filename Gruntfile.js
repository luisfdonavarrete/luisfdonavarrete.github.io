module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            assets: 'assets',
            development: 'development'
        },

        env: grunt.option('env') || process.env.GRUNT_ENV || 'development',

        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: [__dirname], // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },

        clean: {
            options: {
                force: true
            },
            js: ['<%= dirs.assets %>/js/*.js'],
            css: [
                '<%= dirs.assets %>/css/*.css'
            ]
        },

        concat: {
            options: {
                separator: ';'
            },
            script: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/knockout/dist/knockout.js',
                    '<%= dirs.development %>/js/app.js'
                ],
                dest: '<%= dirs.assets %>/js/app.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= dirs.assets %>/js/app.min.js': ['<%= dirs.assets %>/js/app.js']
                }
            }
        },

        concat_css: {
            files: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    '<%= dirs.development %>/css/styles.css'
                ],
                dest: '<%= dirs.assets %>/css/styles.css'
            }
        },

        cssmin: {
            target: {
                files: {
                    '<%= dirs.assets %>/css/styles.min.css': ['<%= dirs.assets %>/css/styles.css']
                }
            }
        },

        critical: {
            test: {
                options: {
                    css: [
                        '<%= dirs.assets %>/css/styles.min.css'
                    ],
                    width: 320,
                    height: 70
                },
                src: '<%= dirs.development %>/index.html',
                dest: 'index.html'
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['default'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            scripts: {
                files: ['<%= dirs.development  %>/js/**/*.js'],
                tasks: ['jsTask'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: ['<%= dirs.development%>/css/**/*.css', '<%= dirs.development%>/index.html'],
                tasks: ['cssTask'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('cssTask',(function () {
        if (grunt.config('env') === 'development') {
            return ['clean:css', 'concat_css', 'critical'];
        }
        else {
            return ['clean:css', 'concat_css', 'cssmin', 'critical'];
        }
    })());

    grunt.registerTask('jsTask',(function () {
        if (grunt.config('env') === 'development') {
            return ['clean:js', 'concat'];
        }
        else {
            return ['clean:js', 'concat', 'uglify'];
        }
    })());
    
    // Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'watch'
    ]);
    
    // Default task(s).
    grunt.registerTask('default', ['clean', 'cssTask', 'jsTask', 'server']);

};