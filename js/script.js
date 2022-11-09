// script.js #3 
// This script manages


function myFunction() {
	'use strict';
	clear ();
	var element = document.getElementById("blueIn");
    element.classList.toggle("hidden");
}

function mySecondFunction() {
	'use strict';
	clear ();
	var element = document.getElementById("blueBottom");
   element.classList.toggle("hidden");
}

function myThirdFunction() {
	'use strict';
	clear ();
	var element = document.getElementById("blueRight");
   element.classList.toggle("hidden");
}

function myForthFunction() {
	'use strict';
	clear ();
	var element = document.getElementById("blueLeft");
   element.classList.toggle("hidden");
}

function myFifthFunction() {
	'use strict';
	clear ();
	var element = document.getElementById("blueIn");
   element.classList.toggle("fifth");
   element.classList.toggle("hidden");
}

function mySixFunction() {
	'use strict';
	clear ();
	var element = document.getElementById("blueIn");
   element.classList.toggle("hidden");
   element.classList.toggle("six");
   element = document.getElementById("green");
   element.classList.toggle("hidden");
}

function clear() {
	document.getElementById("blueBottom").className='hidden';
	document.getElementById("blueRight").className='hidden';
	document.getElementById("blueIn").className='hidden';
	document.getElementById("blueLeft").className='hidden';
	document.getElementById("green").className='hidden';
}

function init () {
	'use strict';
document.getElementById("btn1").addEventListener("click", myFunction);
document.getElementById("btn2").addEventListener("click", mySecondFunction);
document.getElementById("btn3").addEventListener("click", myThirdFunction);
document.getElementById("btn4").addEventListener("click", myForthFunction);
document.getElementById("btn5").addEventListener("click", myFifthFunction);
document.getElementById("btn6").addEventListener("click", mySixFunction);
} // End of init() function.
window.onload = init;


