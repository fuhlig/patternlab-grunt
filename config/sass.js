module.exports = {
    "options": {
        "require": "sass-globbing",
        "loadPath": ["bower_components"],
        // "sourcemap": true
    },
    "dev": {
        "options": {
            "style": "expanded",
        },
        "files": {
            "public/css/main.css": "source/css/main.scss"
        }
    },
    "build": {
        "options": {
            "style": "compressed",
            "require": "sass-globbing"
        },
        "files": {
            "build/assets/css/style.css": "src/assets/css/main.scss"
        }
    }
}
