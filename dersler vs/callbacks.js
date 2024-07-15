const books = [
    {name: 'kitap1', author: 'yazar1'},
    {name: 'kitap2', author: 'yazar2'},
    {name: 'kitap3', author: 'yazar3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
};

listBooks();

const addBook = (newBook) => {
    books.push(newBook);
};

addBook({name: 'kitap4', author: 'yazar4'});

// Her kitap ekleme işleminden sonra bi fonksiyon çalışmasını istersem
//  buna call back fonksiyonu diyicem. 
//  aşağıdaki şekilde ekliyorum

const addBook2 = (newBook, callBack) => {
    books.push(newBook);
    callBack();
};

addBook2({name: 'kitap5', author: 'yazar5'}, listBooks);