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
		}
	}
	this.name = parameters.name;
	this.address1 = parameters.address1;
	this.address2 = parameters.address2;
	this.city = parameters.city;
	this.state = parameters.state;
	this.zipcode = parameters.zipcode;
	this.country = parameters.country;
	this.phone = parameters.phone;
	this.email = parameters.email;
	this.ip = parameters.ip;

};

module.exports = Customer;
