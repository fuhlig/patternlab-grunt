module.exports = {
    "deploy": {
        "files": [
            {
                "expand": true,
                "cwd": "./src/assets/img",
                "src": ["./**/*.*"],
                "dest": "build/assets/img"
            },
            {
                "expand": true,
                "cwd": "./src/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "build/assets/fonts"
            },
            {
                "expand": true,
                "cwd": "./src/templates",
                "src": ["./**/*.*"],
                "dest": "temp"
            }
        ]
    },
    "modernizr": {
        "src": "./bower_components/modernizr/modernizr.js",
        "dest": "build/assets/js/vendor/modernizr.js"
    },
    "jquery": {
        "src": "./bower_components/jquery/jquery.min.js",
        "dest": "build/assets/js/vendor/jquery.min.js"
    },
    "js": {
        "files": [
            {
                "expand": true,
                "cwd": "./src/assets/js",
                "src": ["*.*"],
                "dest": "dist/assets/js"
            }
        ]
    },
    "img": {
        "files": [
            {
                "expand": true,
                "cwd": "./src/assets/img",
                "src": ["./**/*.*"],
                "dest": "dist/assets/img"
            }
        ]
    },
    "fonts": {
        "files": [
            {
                "expand": true,
                "cwd": "./src/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "dist/assets/fonts"
            }
        ]
    }
}
