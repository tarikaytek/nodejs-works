// OOPu karnından bıçaklayan kod
// ödev için sadece

const posts = [
    {name: 'post1', author: 'yazar1'},
    {name: 'post2', author: 'yazar2'},
    {name: 'post3', author: 'yazar3'}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.name);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('bir hata olustu');
    })
    return promise1;
};

listPosts()

addPost({name: 'post5', author: 'yazar5'})
    .then(() => {
        console.log('yeni postlarrrrr');
        listPosts();
    }).catch(error => {
        console.log(error);
    });