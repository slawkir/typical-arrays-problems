
exports.min = function min (array) {
  
  if (array == null || array.length === 0) {
		return 0;
	} else {
		return Math.min(...array);
	}	
}

exports.max = function max (array) {
 
  if (array == null || array.length === 0) {
		return 0;
	} else {
		return Math.max(...array);
	}

}

exports.avg = function avg (array) {
	if (array == undefined || array.length == 0) {return 0;}
	let sum = 0;
	for (i = 0; i < array.length; i++) {
	  sum += array[i];
	}
	let avg = sum / array.length;
	return avg;

}


