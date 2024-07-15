const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('index sayfasi');
})

app.get('/about', (req, res) => {
    res.status(200).send('hakkimda sayfasi');
})

app.get('/contact', (req, res) => {
    res.status(200).send('iletisim sayfasi');
})

app.get('*', (req, res) => {
    res.status(404).send('sayfa bulunamadi');
})


const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} da calismaya basladi`);
})