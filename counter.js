function makeCounter(){
	var count = 1;

	function counter1(){
		return count;
	}

   counter1.get =function() {
	return ++count;
};
	/*counter1.prototype.get = function() {
		return count++;
	};*/

	counter1.set = function(value) {
		count=value;
	};

	counter1.reset = function() {
		count=0;
	};

	return counter1;
}

var counter1 = makeCounter();
counter1();
console.log(counter1.get()); //2
counter1.set(10);
counter1();
console.log(counter1.get()); // 11
console.log(counter1()); // 11
counter1.reset();
console.log(counter1.get()); // 1
