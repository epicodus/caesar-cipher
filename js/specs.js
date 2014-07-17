describe('makeSecret', function() {
	describe('Encode a one-word message', function() {
		it("returns 'fdw' for the message 'cat'.", function() {
			makeSecret("cat").should.equal("fdw");
		});
		it("returns 'hslfrgxv' for the message 'epicodus'.", function() {
			makeSecret("epicodus").should.equal("hslfrgxv");
		});
	});
	describe('Encode a two-word message', function() {
		it("returns 'hslfrgxv ' for the message 'epicodus rocks'.", function() {
			makeSecret("epicodus rocks").should.equal("hslfrgxv urfnv");
		});
	});
	describe('Encode a multi-word message', function() {
		it("returns 'wkh phhwlqj lv wrpruurz' for the message 'the meeting is tomorrow'.", function() {
			makeSecret("the meeting is tomorrow").should.equal("wkh phhwlqj lv wrpruurz");
		});
	});
});