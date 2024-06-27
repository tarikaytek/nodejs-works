function primeNumbers(lowNumber, highNumber){
    if(lowNumber <= 2 && highNumber >= 2)
        console.log(2)

    let isPrime;
    let i, j;

    for(i = lowNumber; i<=highNumber; i++){
        
        isPrime = ((i % 2 == 0) || (i < 2)) ? false : true
        
        j = 3;
        lim = parseInt(Math.sqrt(i))
        
        while((j <= lim) && isPrime){
            //console.log(i, j, lim, isPrime)
            if(i % j == 0)
                isPrime = false;
            j+=2;
        }
        
        if(isPrime)
            console.log(i);
    }
}

primeNumbers(0, 25)

console.log(process.argv)