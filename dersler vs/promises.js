const promise1 = new Promise((resolve, reject) => {
    resolve('veriler alindi');
    reject('baglanti hatasi');
});

// resolve durumunda yapılacak şey
promise1.then(value => {
    console.log(value);
});

// reject durumunda yapılacak şey
promise1.catch(error => {
    console.log(error);
});

// ayrı ayrı yazmaya gerek yok, tek parçada
promise1
    .then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    });

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

const addBook = (newBook) => {
    const promise2 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('bir hata olustu');
    })
    return promise2;
};

addBook({name: 'kitap5', author: 'yazar5'})
    .then(() => {
        console.log('yeni liste');
        listBooks();
    }).catch(error => {
        console.log(error);
    });