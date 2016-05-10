describe("Fizzbuzz", function() {

	var fizzbuzz
	beforeEach(function() {
		fizzbuzz = new FizzBuzz();
	});


	describe("Know when a number is", function(){

		it("is divisible by 3", function(){
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});
	});

		describe("Know when a number is not", function(){

			it("is divisible by 3", function(){
				expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
			});
		});
});