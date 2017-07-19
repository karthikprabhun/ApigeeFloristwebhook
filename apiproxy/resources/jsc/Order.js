var httpJson = require('./http-json');

var Order = function(parameters) {
	if (!parameters) {
		parameters = {}
	}

	this.prod = {};
	this.products = [];
	this.customer = {};
	this.ccinfo = {};
	this.recipient = {};
	
	
//Default value
	this.prod.code = '';
	this.prod.price = '';
	this.prod.deliverydate = '';
	this.prod.cardmessage = '';
	this.prod.specialinstructions = '';
	this.prod.recipient = this.recipient;
	this.recipient.name = '';
	this.recipient.institution = '';
	this.recipient.address1 = '';
	this.recipient.address2 = '';
	this.recipient.city = '';
	this.recipient.state = '';
	this.recipient.country = '';
	this.recipient.phone = '';
	this.recipient.zipcode = '';

	this.customer.name = '';
	this.customer.address1 = '';
	this.customer.address2 = '';
	this.customer.city = '';
	this.customer.state = '';
	this.customer.zipcode = '';
	this.customer.country = '';
	this.customer.phone = '';
	this.customer.email = '';
	this.customer.ip = '';

	this.ccinfo.type = '';
	this.ccinfo.ccnum = 1234512345123455;
	this.ccinfo.cvv2 = '';
	this.ccinfo.expmonth = '';
	this.ccinfo.expyear = '';
	this.ordertotal = 64.94;
	
	if (parameters['products']) {
		product = parameters.products;

		this.prod.code = product.code;
		this.prod.price = product.price;
		this.prod.deliverydate = product.deliverydate;
		this.prod.cardmessage = product.cardmessage;
		this.prod.specialinstructions = product.specialinstructions;
		this.prod.recipient = product.recipient

		if (product['recipient']) {
			var recipient = product.recipent;

			this.recipient.name = recipient.name;
			this.recipient.institution = recipient.institution;
			this.recipient.address1 = recipient.address1;
			this.recipient.address2 = recipient.address2;
			this.recipient.city = recipient.city;
			this.recipient.state = recipient.state;
			this.recipient.country = recipient.country;
			this.recipient.phone = recipient.phone;
			this.recipient.zipcode = recipient.zipcode;

		}

	}

	this.products.push(this.prod);

	if (parameters['customer']) {
		var customer = parameters.customer;

		this.customer.name = customer.name;
		this.customer.address1 = customer.address1;
		this.customer.address2 = customer.address2;
		this.customer.city = customer.city;
		this.customer.state = customer.state;
		this.customer.zipcode = customer.zipcode;
		this.customer.country = customer.country;
		this.customer.phone = customer.phone;
		this.customer.email = customer.email;
		this.customer.ip = customer.ip;

	}

	if (parameters['ccinfo']) {
		var ccinfo = parameters.ccinfo;

		this.ccinfo.type = ccinfo.type;
		this.ccinfo.ccnum = ccinfo.ccnum;
		this.ccinfo.cvv2 = ccinfo.cvv2;
		this.ccinfo.expmonth = ccinfo.expmonth;
		this.ccinfo.expyear = ccinfo.expyear;

	}

}

Order.prototype.placeOrder = function(callback) {
	var obj = new Object();

	obj['products'] = JSON.stringify(this.products);
	obj['customer'] = JSON.stringify(this.customer);

	obj['ccinfo'] = JSON.stringify(this.ccinfo);
	obj['ordertotal'] = JSON.stringify(this.ordertotal);

	console.log(obj);

//	stringified = JSON.stringify(obj);

//	httpJson.post(obj, callback);

};

module.exports = Order;
