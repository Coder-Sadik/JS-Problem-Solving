// *** let's create Book Store :) ***

// an array to store our book info
let bookStore = [];

// add books to store
let createBookList = (bookTitle, authorName, numberOfCopies) => {
	let book = {
		title: bookTitle,
		author: authorName,
		quantity: numberOfCopies,
	};

	bookStore.push(book);
};

// add new copies
let addCopies = (bookName, numberOfCopies) => {
	let book = bookStore.find((book) => book.title === bookName);

	if (book) {
		book.quantity += numberOfCopies;
	} else console.log(`*** ${bookName} not found in the store ***`);
};

// update sold items
let sellBook = (bookName, numberOfCopies) => {
	let book = bookStore.find((book) => book.title === bookName);
    
	if (book) {
		book.quantity > numberOfCopies
			? (book.quantity -= numberOfCopies)
			: console.log(`*** atto gula ${bookName} koi paiso? ***`);
	} else console.log(`*** ${bookName} not found in the store ***`);
};

// get store details
let getDetails = () => {
	console.log(bookStore);
};

// *** let's test it ***
createBookList("Bohubrihi", "Humayun Ahmed", 10);
createBookList("Sonar Tori", "Rabindranath Tagore", 20);
createBookList("Dopamine Detox", "Thibaut Meurisse", 30);

sellBook("Sonar Tori", 50);
sellBook("Dopamine Detox", 20);
sellBook("Bohubrihi", 5);

addCopies("Bohubrihi", 2);

getDetails();

// *** checking negative numbers and invalid characters for quantity hasn't been added yet ***
