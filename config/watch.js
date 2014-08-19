module.exports = {
    "scss": {
        "files": ["source/assets/css/**/{.*,*,*/*}"],
        "tasks": "scss"
    },

    // http://bradfrostweb.com/blog/post/using-grunt-with-pattern-lab/    
    "html": {
        "files": [
            "source/_patterns/**/*.mustache",
            "source/**/*.json"
        ],
        "tasks": ["shell:patternlab"],
        options: {
            spawn: false
        }
    },
    "js": {
        "files": ["source/assets/js/**/{.*,*,*/*}"],
        "tasks": "js"
    },
    "img": {
        "files": ["source/assets/img/**/{.*,*,*/*}"],
        "tasks": "img"
    },
    "sprite": {
        "files": ["source/assets/img/css/sprites/src/{.*,*,*/*}"],
        "tasks": "copysprite"
    },
    "fonts": {
        "files": ["source/assets/fonts/{.*,*,*/*}"],
        "tasks": "copy:fonts"
    },
    "grunt": {
        "files": [
            'Gruntfile.js',
            'config/*.js'
        ]
    },
    "livereload": {
        "options": {
            "livereload": true
        },
        "files": [
            "dist/**/*.html",
            "dist/assets/css/{,*/}*.css",
            "dist/assets/js/{,*/}*.*",
            "dist/assets/img/{,*/}*.*"
        ]
    }
}
