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

	describe("when playing, says", function() {

		it('"Fizz" when a number is divisible by 3', function() {
			expect(fizzbuzz.says(3)).toEqual("Fizz");
		});

		it('"Buzz" when a number is divisible by 5', function() {
			expect(fizzbuzz.says(5)).toEqual("Buzz");
		});

		it('"Fizzbuzz" when a number is divisible by 3 and 5', function() {
			expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
		});
	});

		
});