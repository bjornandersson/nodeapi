var express = require('express'),
 	cors = require('cors'),
 	app = express();

app.use(cors());

app.get('/', function (req, res, next) {
	res.json({ status: "OK" });
});

app.listen(13337, function() {
	console.log('server started, cors enabled, using port 13337');
})
