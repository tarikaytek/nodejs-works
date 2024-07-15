const fs = require('fs');

// dosya okuma
fs.readFile('sifre.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya okundu canim'); // yanlis kullanim, niyeyse dokümantasyonda var ama errordan sonra kırmıyor kodu
});

// yazma
fs.writeFile('anan.txt', 'anna', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('dosya olusturuldu ');
});

//dosyaya ekleme
fs.appendFile('anan.txt', '\nbaban', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('yeni veri eklendi');
});

// silme
fs.unlink('anan.txt', (err) => {
    if (err) console.log(err);
    console.log('dosya silindi');
});

//dosya olusturma
fs.mkdir('anann', (err) => (err) => {
    if (err) console.log(err);
    console.log('klasorler olusturuldu');
});
