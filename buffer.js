function makeBuffer() {
	var text='';
		 return function (str=''){
		 	text+=String(str);
		 	return text;
		 }
}
var buffer = makeBuffer();

//добавить значения буфера
buffer('Hello');
buffer('world');
buffer('!');
alert(buffer());

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() ); // '010'
