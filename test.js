let factorial = (num) => {  
    //what about input of 0, what about input negative
    //when does it get too high

    // create a sum variable to hold the answer
    let sum = 1;

    // iterate from 1 to the num
    // on iteration multiply the sum by i
    for(let i= 1; i <= num; i++) {
        sum *= i;
    }

    //return sum
    return sum;

}

let fizzBuzz = (num) => {
    //iterate from 1 to num
    for(let i = 1; i <= num; i++) {
        console.log('iteration:', i)
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        }
        else if(i % 3 === 0) {
            console.log("fizz")
        }
        else if(i % 5 === 0) {
            console.log('buzz')
        }
        else {
            console.log(i)
        }

    }
    //if iterator divisible by 3? print fizz
    //if iterator divisible by 5? print buzz
    //if iterator divisible by both 3 and 5? print fizzbuzz
    //if none of these are true? print num
    //include all integers up to and including the num

}

fizzBuzz(15)