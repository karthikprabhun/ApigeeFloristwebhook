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
		}
	}

	this.name = parameters.name;
	this.institution = parameters.institution;
	this.address1 = parameters.address1;
	this.address2 = parameters.address2;
	this.city = parameters.city;
	this.state = parameters.state;
	this.country = parameters.country;
	this.phone = parameters.phone;
	this.zipcode = parameters.zipcode;

}

module.exports = Recipent;