function makeCounter(){
	var count = 1;

	function counter(){
		return count;
	}

   counter.get =function() {
	return ++count;
    };
	
	counter.set = function(value) {
		count=value;
	};

	counter.reset = function() {
		count=0;
	};

	return counter;
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
