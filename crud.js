const fs = require('fs').promises;

const employee1 = '{"name": "Employee 1 Name", "salary": 2000}';
const employee2 = '{"name": "Employee 2 Name", "salary": 3000}';
const fileName = 'employees.json';

async function crud() {
    try {
        // create
        await fs.writeFile(fileName, employee1, 'utf8');
        console.log('Dosya oluşturuldu');

        // oku
        let data = await fs.readFile(fileName, 'utf8');
        console.log(data);
        console.log('Dosya okundu canım');

        // güncele
        await fs.appendFile(fileName, employee2, 'utf8');
        console.log('Dosya güncellendi');

        // yeni halini yaz
        data = await fs.readFile(fileName, 'utf8');
        console.log(data);
        console.log('Dosya tekrar okundu');

        // sil
        await fs.unlink(fileName);
        console.log('Dosya silindi');
    } catch (err) {
        console.log(err);
    }
}

crud();
