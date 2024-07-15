function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('veriler alinmaya calisiliyor..');

        if(data)
            resolve('veriler alindi');
        else
            reject('veriler alinamadi');
    })
}

function cleanData(receivedData){
    return new Promise((resolve, reject) => {
        console.log('veriler duzenleniyor..');

        if(receivedData)
            resolve('veriler duzenlendi');
        else
            reject('veriler duzenlenemedi');
    })
}

getData(false)
    .then(result => {
        console.log(result);
        return cleanData(true)
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

// Yukarıdaki promiseli olan çözümdü. şimdi de async await 

async function processData(){
// cleane başlamadan önce get işlemini bitirmeliyim
// o yüzden fonksiyona async dedim ve get dataya await diyorum. yani o bitecek!
    try{
        const receivedData = await getData(true);
        console.log(receivedData);

        const cleanedData = await cleanData(true);
        console.log(cleanedData);
    } catch(error){
        console.log(error)
    }
}

processData(); 