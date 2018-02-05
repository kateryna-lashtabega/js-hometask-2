function primeNumber(x, y) {
	if (x < (y)) {
		var n = 2;
		var i = 0;
		for (var z = x; z <= y; z++) {
			i = 0;
			if (z > 1) {
			for (n = 2; n < z; n++) {
				if ((z===1) || (z % n === 0)) {
					i = 1;
					 break;
				}
				
			}

			if (i == 0) {
				document.write(z +" ");
			}
		
		}
		}



		 
		
	} else {
		alert('Wrong interval!');
		}
	
	


	}



primeNumber (x = +prompt('Please, input your minimum number'),
	y = +prompt('Please, input  your maximum number'));



