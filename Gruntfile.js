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
                    bases: [__dirname],
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

        image_resize: {
            resize: {
                options: {
                    width: 360,
                    height: 207,
                    upscale: true
                },
                src: '<%= dirs.development %>/img/*.png',
                dest: '<%= dirs.assets %>/img/'
            },
            me: {
                options: {
                    width: 100,
                    height: 120
                },
                files: {
                    '<%= dirs.assets %>/img/me.jpg': '<%= dirs.development %>/img/me.jpg'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.development %>/',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: '<%= dirs.assets %>/'
                }]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            script: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/js/scrollspy.js',
                    'bower_components/bootstrap/js/transition.js',
                    'bower_components/bootstrap/js/modal.js',
                    'bower_components/underscore/underscore.js',
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
                    'bower_components/font-awesome/css/font-awesome.css',
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
                files: ['<%= dirs.development %>/js/**/*.js'],
                tasks: ['jsTask'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: ['<%= dirs.development %>/css/**/*.css', '<%= dirs.development %>/css/*.css', '<%= dirs.development%>/index.html'],
                tasks: ['cssTask'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        'string-replace': {
            inline: {
                files: {
                    'index.html': 'index.html',
                },
                options: {
                    replacements: [
                        {
                            pattern: '<script src="assets/js/app.js"></script>',
                            replacement: '<script src="assets/js/app.min.js"></script>'
                        },
                        {
                            pattern: '<link href="assets/css/styles.css" rel="stylesheet">',
                            replacement: '<link href="assets/css/styles.min.css" rel="stylesheet">'
                        },
                        {
                            pattern: 'assets/css/styles.css',
                            replacement: 'assets/css/styles.min.css'
                        }
                    ]
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
grunt.loadNpmTasks('grunt-image-resize');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-string-replace');

grunt.registerTask('cssTask', (function () {
    if (grunt.config('env') === 'development') {
        return ['clean:css', 'concat_css', 'critical'];
    }
    else {
        return ['clean:css', 'concat_css', 'cssmin', 'critical', 'string-replace'];
    }
})());

grunt.registerTask('jsTask', (function () {
    if (grunt.config('env') === 'development') {
        return ['clean:js', 'concat'];
    }
    else {
        return ['clean:js', 'concat', 'uglify'];
    }
})());

grunt.registerTask('server', [
    'express',
    'watch'
]);
    
// Default task(s).
grunt.registerTask('default', ['clean', 'cssTask', 'jsTask', 'server']);

};