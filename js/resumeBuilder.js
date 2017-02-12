var myName = "Anton Thebestovich.";
var myRole = "Java and Javascript developer.";

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

var s = "audacity";
var array = [1, 2, 3, 4, 5];
var tmpValue;

var diffFunc = function(s){
	return s.replace("aud", "Ud");
};

var incrementFunction = function(array){
	array[array.length - 1] = ++array[array.length - 1];
	return array;
};

var getSomeObjectFromArray = function(array){
	return array.slice(1, 2);
};

var experimentWithArrayCopying = function(array){
	var newArray = array;
	newArray[newArray.length - 1] = 2222222;
	return array;
};

var freedomCopyOfArray = function(array){
	var absoutelyIndependedArray = array.slice(0);
	array[array.length - 1] = 2;
	return absoutelyIndependedArray;
};

var modifyingArrayWithPopMethod = function(array){
	tmpValue = array.pop();
	return array;
};

var modifyingArrayWithPushMethod = function(array){
	array.push(tmpValue);
	return array;
};

console.log(incrementFunction(array));
console.log(getSomeObjectFromArray(array));
console.log(experimentWithArrayCopying(array));
console.log(freedomCopyOfArray(array));
console.log(array);
console.log(modifyingArrayWithPopMethod(array));
console.log(tmpValue);
console.log(modifyingArrayWithPushMethod(array));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);