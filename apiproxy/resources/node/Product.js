 /**
 * http://usejsdoc.org/
 */
var Product = function(parameters) {
	if (!parameters) {
		parameters = {
			code : '',
			price : '',
			deliverydate : '',
			cardmessage : '',
			specialinstructions : '',
			recipent : ''
		}
	}
	
		this.code = parameters.code;
		this.price = parameters.price;
		this.deliverydate = parameters.deliverydate;
		this.cardmessage = parameters.cardmessage;
		this.specialinstructions = parameters.specialinstructions;
		this.recipent = parameters.recipent;
		
		
		/*if (parameters['recipent']) {
			var Recipent = parameters.recipent;

			this.name = Recipent.name;
			this.institution = Recipent.institution;
			this.address1 = Recipent.address1;
			this.address2 = Recipent.address2;
			this.city = Recipent.city;
			this.state = Recipent.state;
			this.country = Recipent.country;
			this.phone = Recipent.phone;
			this.zipcode = Recipent.zipcode;
			return this;
		}*/

}

module.exports = Product;