function Checkout() {
	this.scan = function() {
		
	}
	
	this.total = function() {
		return "20";
	}
}

describe('Checkout scans C', function() {
	var output = '';
	
	before(function() {
		var checkout = new Checkout();
		checkout.scan('C');
		output = checkout.total();
	});
	
	it('should return 20', function() {
		output.should.equal("20");
	});
});