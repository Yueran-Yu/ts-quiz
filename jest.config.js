module.exports = {
	verbose: true,
	clearMocks:false,
	moduleFileExtensions:["js","jsx","ts","tsx"],
	moduleDirectories:["node_modules"],
	globals:{
		"ts-jest":{
			tsConfig:"tsconfig.test.json"
		}
	},
	transform:{

	}
}