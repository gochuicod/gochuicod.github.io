function roll(){
    let output = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = `${output}`;
}

let sample = {
    execute: function(number){
        // program to check if a number is prime or not
        // take input from the user
        let isPrime = true;

        // check if number is equal to 1
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }

        // check if number is greater than 1
        else if (number > 1) {

            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                console.log(number / i);
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                console.log(`${number} is a prime number`);
            } else {
                console.log(`${number} is a not prime number`);
            }
        }

        // check if number is less than 1
        else {
            console.log("The number is not a prime number.");
        }
    }
}

let problem3 = {
    p3: (dRFAU,dVUIA,dMC) => {
        let income, profit, maxProfit = 0, maintenance = 0, n = 0;
        for(let units = 50; units > 0; units--, dRFAU += dVUIA){
            income = units * dRFAU;
            maintenance = units * dMC;
            profit = income - maintenance;
            if(profit > maxProfit){
                maxProfit = profit;
                n = units;
            }
            console.log(`Unit: ${units}, Income: ${income}, Maintenance: ${maintenance}, Profit: ${profit}, MaxProfit: ${maxProfit}`);
        }
    }
}
