module.exports = {
    "options": {
        "browsers": [
            "last 2 version"
        ],
        "diff": true
    },
    "dist": {
        files: [{
            expand: true,
            cwd: "source/css/",
            src: "main.css",
            dest: "source/css/"
        }]
    }

}
