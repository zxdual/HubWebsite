$(function() {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	var quotes = ['"Injustice anywhere is a threat to justice everywhere." - Martin Luther King, Jr.',
		      '"Where justice is denied, where poverty is enforced, where ignorance prevails, and where any one class is made to feel that society is an organized conspiracy to oppress, rob and degrade them, neither persons nor property will be safe." - Frederick Douglas',
		      '"I\'m for truth, no matter who tells it. I\'m for justice, no matter who it\'s for or against." - Malcom X',
		      '"Peace cannot be kept by force; it can only be achieved by understanding." - Albert Einstein',
		      '"Peace is a journey of a thousand miles and it must be taken one step at a time." - Lyndon B. Johnson',
		      '"If you have knowledge, let others light their candles in it." - Margaret Fuller',
		      '"My address is like my shoes. It travels with me. I abide where there is a fight against wrong." - Mother Jones',
		      '"You can do one of two things; just shut up, which is something I don\'t find easy, or learn an awful lot very fast, which is what I tried to do." - Jane Fonda' 
	];
	
	var random = getRandomInt(0, quotes.length);

	$('#quote-text').text(quotes[random]);
});
