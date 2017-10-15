const express = require("express");

const { getLevel } = require("./src/getLevel");


const app = express()

app.get('/', function (req, res) {
	  res.send('Hello Egg!')
})

app.route("/levels")
	.get((req, res, next) => {
		
		const levelID = req.params("levelID");
		
		getLevel(levelID).then(data => {
			const sendData = {
				rc: 0,
				msg: `Level ID ${levelID} found!`,
				data: data[0]
			}
			res.send(sendData);
		}).catch(error => {
			const errorData = {
				rc: 2,
				msg: error
			}
			res.status(201).send(errorData);
		});
	});

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!')
})
