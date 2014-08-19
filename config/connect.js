module.exports = {
	"options": {
		"port": 8000,
        "hostname": "localhost",
        "livereload": 25729
	},

	"livereload": {
		options: {
			open: true,
			base: [
				'./public'
			]
		}
	},

    "server": {
        "options": {
            "base": "./public"
        }
    }
}
