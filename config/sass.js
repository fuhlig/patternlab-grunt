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
            "public/css/main.css": "source/css/main.scss",
            "public/styleguide/css/styleguide.css": "core/styleguide/css/styleguide.scss",
            "public/styleguide/css/styleguide-specific.css": "core/styleguide/css/styleguide-specific.scss"
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
