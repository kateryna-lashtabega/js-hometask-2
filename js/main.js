function primeNumber(min, max) {
	if (min < (max)) {
		var divisor = 2;
		var res = 0;
		for (var currentNum = min; currentNum <= max; currentNum++) {
			res = 0;
			if (currentNum > 1) {
			
			for (divisor = 2; divisor < currentNum; divisor++) {
				if ((currentNum === 1) || (currentNum % divisor === 0)) {
					res = 1;
					 break;
				}
				
			}

			if (res == 0) {
				document.write(currentNum +" ");
			}
		
		}
		}

	} else {
		alert('Wrong interval!');
		}
	
	}



primeNumber (min = +prompt('Please, input your minimum number'),
			 max = +prompt('Please, input  your maximum number'));



