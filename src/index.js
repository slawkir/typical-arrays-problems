
exports.min = function min (array) {
  return 0;
  if (array == null || array.length === 0) {
		return 0;
	} else {
		return Math.min(...array);
	}	
}

exports.max = function max (array) {
  return 0;
  if (array == null || array.length === 0) {
		return 0;
	} else {
		return Math.max(...array);
	}

}

exports.avg = function avg (array) {
  return 0;
  if (!array) {
		return 0;
	} 

	if (array.length > 1) {
  for (var i=0,sum=0;i<arr.length;i++) {
    sum += arr[i];
  }
  return sum / i;
}

}
