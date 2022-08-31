//to declear a object

var book = {
    title: 'How to talk to anyone',
    author: 'Simon Sinek',
    prices: 250,
    pages: 300,
    publisher: 'penguine'
};

//to add new property
book.color = 'white';

//to change a property value
book.prices = 200;

//another way to change property value
book["pages"] = 350;
book["pag" + "es"] = 450;

console.log(book);