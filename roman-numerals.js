var toRoman = function(number) {
	var result = '';
	var arabicToRoman = [

		{arabic : 1000, roman : 'M'},
		{arabic : 900, roman : 'CM'},
		{arabic : 500, roman : 'D'},
		{arabic : 400, roman : 'CD'},
		{arabic : 100, roman : 'C'},
		{arabic : 90, roman : 'XC'},
		{arabic : 50, roman : 'L'},
		{arabic : 40, roman : 'XL'},
		{arabic : 10, roman : 'X'},
		{arabic : 9, roman : 'IX'},
		{arabic : 5, roman : 'V'},
		{arabic : 4, roman : 'IV'},
		{arabic : 1, roman : 'I'},
		
	]
	for(var i = 0; i < arabicToRoman.length; i++) {
		var map = arabicToRoman[i];
		while(number >= map.arabic) {
			result = result + map.roman
			number = number - map.arabic
		}
	}

	return result;

}

module.exports = toRoman;