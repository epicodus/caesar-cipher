describe('makeSecret', function() {
	describe('Encode a one-word message', function() {
		it("returns 'fdw' for the message 'cat'.", function() {
			makeSecret("cat").should.equal("fdw");
		});
		it("returns 'hslfrgxv' for the message 'epicodus'.", function() {
			makeSecret("epicodus").should.equal("hslfrgxv");
		});
	});
});