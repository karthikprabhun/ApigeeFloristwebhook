 /**
 * http://usejsdoc.org/
 */
var Customer = require('./Customer.js');
var Ccinfo = require('./Ccinfo.js');
var Prod = require('./Product.js');
var Recipient = require('./Recipent.js');
var Order = require('./Order.js');

var data = require('./data.json');



var cust = new Customer();

var prod = new Prod();
var recipient = new Recipient();
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
	console.log(result)
});
