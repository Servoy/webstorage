{
	"name": "webstorage-localstorage",
	"displayName": "localstorage",
	"version": 1,
 	"definition": "webstorage/localstorage/localstorage.js",
	"libraries": [],
"model": 
	{
		
	},

	"api": 
	{
		"key": 
		{
			"parameters": 
			[
				{
					"name": "index",
					"type": "int"
				}
			],

			"returns": "string"
		},

		"setItem": 
		{
			"parameters": 
			[
				{
					"name": "key",
					"type": "string"
				},

				{
					"name": "value",
					"type": "string"
				}
			]
		},

		"getItem": 
		{
			"parameters": 
			[
				{
					"name": "key",
					"type": "string"
				}
			],

			"returns": "string"
		},

		"removeItem": 
		{
			"parameters": 
			[
				{
					"name": "key",
					"type": "string"
				}
			]
		},

		"clear": 
		{
			
		},

		"getLength": 
		{
			"returns": "int"
		}
	}
}