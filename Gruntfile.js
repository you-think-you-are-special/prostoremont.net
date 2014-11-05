module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    {expand: true, src: ['src/img/*.gif'], dest: 'dest/img/', flatten: true},
                    {expand: true, src: ['src/css/*.ttf'], dest: 'dest/css/', flatten: true},
                ]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,ico,jpeg}'],
                    dest: 'dest/'
                }]
            }
        },

        concat: {
            options: {
                separator: ' '
            },

            js: {
                src: [
                    'src/js/jquery.min.js',
                    'src/js/jquery-migrate.min.js',
                    'src/js/over.js',
//                    'src/js/jquery.timers.js',
//                    'src/js/jquery.form.min.js',
//                    'src/js/colorbox.js',
//                    'src/js/comment-reply.min.js',
//                    'src/js/gallery.js',
//                    'src/js/scripts.js'
                ],
                dest: 'dest/js/<%= pkg.name %>.js'
            },

            html: {
                src: ['src/index.html'],
                dest: 'dest/index.html'
            },

            css: {
                src: ['src/css/*.css'],
                dest: 'dest/css/<%= pkg.name %>.css'
            }
        },

//        watch: {
//            css: {
//                files: '**/*.css',
//                tasks: ['css'],
//                options: {
//                    livereload: true
//                }
//            },
//
//            js: {
//                files: '**/*.js',
//                tasks: ['js'],
//                options: {
//                    livereload: true
//                }
//            }
//
//        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: '*',
                    livereload: true,
                    base: 'dest',
                    keepalive: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
//    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'imagemin', 'copy', 'connect']);
};