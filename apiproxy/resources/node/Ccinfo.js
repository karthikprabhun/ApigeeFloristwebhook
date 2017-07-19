 /**
 * http://usejsdoc.org/
 */

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

	this.type = parameters.type;
	this.ccnum = parameters.ccnum;
	this.cvv2 = parameters.cvv2;
	this.expmonth = parameters.expmonth;
	this.expyear = parameters.expyear;

}

module.exports = Ccinfo;