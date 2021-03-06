var express = require('express'),
 	cors = require('cors'),
 	morgan = require('morgan'),
 	app = express();

app.use(cors());
app.use(morgan('combined'));

app.get('/', function (req, res, next) {
	res.json({ status: "OK" });
});

app.listen(13337, function() {
	console.log('server started, cors enabled, using port 13337');
})
