var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var apigee = require('apigee-access');

var app = express();
//app.use(bodyParser.json());

app.post('/placeOrder', function(request, response) {

	callToBackend(request, response, function(err, data) {

		if (!err){

			response.setHeader('Content-Type', 'application/json');
			
			response.send(data);
		}
		else {

			response.status(500).send(err);
			return;
		}
	});

});

var callToBackend = function(mainreq, mainres, callback) {
	var jsonDataObj = apigee.getVariable(mainreq, 'myvar');
	
	console.log("convertostring"+JSON.stringify(jsonDataObj));

	var options = {

		url : "http://kaprthikprabhu-prod.apigee.net/webhook-flower",
		body : JSON.stringify(jsonDataObj),
        
		"headers" : {
			"content-type" : "application/json;charset=utf-8",
			"authorization" : "Basic NDE4ODQyOjB0RU5Fdw=="

		}

	};

	var req = request.post(options, function(err, res, body) {
console.log(body);
		if (!err && res.statusCode == '200')
			return callback(false, body);

		return callback(err, null);

	});

}

app.listen((process.env.PORT || 9001), function() {
	console.log("server Listening");
});


function getLengthInBytes(str) {
    var s = str.length;
    for (var i=str.length-1; i>=0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s+=2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
}
