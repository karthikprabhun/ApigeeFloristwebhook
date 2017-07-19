
var Customer = function(parameters) {

	if (!parameters) {

		parameters = {
			name : '',
			address1 : '',
			address2 : '',
			city : '',
			state : '',
			zipcode : '',
			country : '',
			phone : '',
			email : '',
			ip : '1.1.1.1'
		};
	}
/*	this.name = parameters.name;
	this.address1 = parameters.address1;
	this.address2 = parameters.address2;
	this.city = parameters.city;
	this.state = parameters.state;
	this.zipcode = parameters.zipcode;
	this.country = parameters.country;
	this.phone = parameters.phone;
	this.email = parameters.email;
	this.ip = parameters.ip;*/

};
var Recipent = function(parameters) {
	if (!parameters) {
		parameters = {
			name : '',
			institution : '',
			address1 : '',
			address2 : '',
			city : '',
			state : '',
			country : '',
			phone : '',
			zipcode : ''
		};
	}

/*	this.name = parameters.name;
	this.institution = parameters.institution;
	this.address1 = parameters.address1;
	this.address2 = parameters.address2;
	this.city = parameters.city;
	this.state = parameters.state;
	this.country = parameters.country;
	this.phone = parameters.phone;
	this.zipcode = parameters.zipcode;*/

};

var Product = function(parameters) {
	if (!parameters) {
		parameters = {
			code : '',
			price : '',
			deliverydate : '',
			cardmessage : '',
			specialinstructions : '',
			recipent : ''
		};
	}
	
	/*	this.code = parameters.code;
		this.price = parameters.price;
		this.deliverydate = parameters.deliverydate;
		this.cardmessage = parameters.cardmessage;
		this.specialinstructions = parameters.specialinstructions;
		this.recipent = parameters.recipent;*/
		

}

var Ccinfo = function(parameters) {
	if (!parameters) {

		parameters = {
			type : '',
			ccnum : '',
			cvv2 : '',
			expmonth : '',
			expyear : ''

		}
	}

/*	this.type = parameters.type;
	this.ccnum = parameters.ccnum;
	this.cvv2 = parameters.cvv2;
	this.expmonth = parameters.expmonth;
	this.expyear = parameters.expyear;*/

}

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
		this.prod.recipient = this.recipient;

		if (product['recipient']) {
			var recipient = product.recipient;

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
var obj = {
    	"products":JSON.stringify(this.products),
		"customer":JSON.stringify(this.customer),
		"ccinfo":JSON.stringify(this.ccinfo),
		"ordertotal":JSON.stringify(this.ordertotal)
	};

//var s = JSON.stringify(obj);

var str_calculator = obj;
//context.setVariable("request.content", obj);
context.setVariable("myvar", obj);
//context.setVariable("request.content", obj);
	
};


var cust = new Customer();

var prod = new Product();
var recipient = new Recipent();
var ccinfo = new Ccinfo();

cust.address1 = "123 Big Street";
cust.address2 = "";
cust.city = "Wilmington";
cust.country = "US";
cust.email = "phil@floristone.com";
cust.ip = "1.1.1.1";
cust.name = "John Doe";
cust.state = "DE";
cust.zipcode = "19801";
cust.phone = "123-123-1234";

prod.cardmessage = "This is a card message";
prod.deliverydate = "2017-07-28";
prod.specialinstructions = "Special delivery instructions go here";
prod.code = "F1-509";
prod.price = 39.95;
prod.recipient = recipient;

recipient.address1 = "123 Big St";
recipient.address2 = "";
recipient.name = "phil";
recipient.city = "Wilmington";
recipient.state = "DE";
recipient.country = "US";
recipient.institution = "House";
recipient.zipcode = "19805";
recipient.phone = '1234567890';

ccinfo.ccnum = 1234512345123455;
ccinfo.cvv2 = 123;
ccinfo.expmonth = 3;
ccinfo.expyear = 19;
ccinfo.type = 'vi';

// var order = new Order({'customer':cust,'products':prod,'ccinfo':ccinfo});




var order = new Order({
	products : prod,
	customer : cust,
	ccinfo : ccinfo
});
// console.log(JSON.stringify(ccinfo))

order.placeOrder(function(result) {
//	console.log(result)
});
