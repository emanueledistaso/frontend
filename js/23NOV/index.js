//ESERCIZI 23/11

//40_01_01.00

/*
    function sum (a,b){
        return a + b;
    }

    let a= 3, b = 4;
    console.log(sum (3,4));
    console.log (sum (6,7));
*/

//40_01_10.10

/*
    let descriptions = [
        'dashing',
        'chivalrous',
        'astonishing',
        'shrewd',
        'brave'
    ]

    function describeName () {
        let n = Math.random()*descriptions.length;
        n = Math.floor(n);
        let name = prompt("What's your name?");
        console.log(descriptions[n], name);
    }

    describeName();
*/

//40_01_01.20

function calculator(a, b, operation = "+") {
  let result;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
    case "x":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "**":
      result = a ** b;
      break;
    case "%":
      result = a % b;
      break;
  }
  return result;
}

/*
    let a = 28, b=7;
    let operator = '/';
    console.log(calculator(a,b,operator));
*/

//40_01_01.30

/*
    const arr = [];

    for (let i = 0; i < 10; i++) {
        let firstValue = i * 5 ;
        let secondValue = i * i ;
        arr.push(calculator(firstValue, secondValue, '+'));
    }

    console.log(arr);
*/

//40_10_01.40

/*
    let start = 10;

    function countdown( index ) {
        console.log(index);
        if (index<1){
            index--;
            return;
        }
        if (index >= 1){
            index--;
           return countdown(index); 
        }
    }

    countdown(start);

    function secondCount (index) {
        console.log(index);
        if (index > 0){
            index --;
            return secondCount(index);
        }
        return;
    }

    secondCount(start);
*/

//40_01_01.50

/*
    let output = (argument) => console.log(argument);
    let word = "Hello world!"
    output (word);

    function outputCopy (argument) {
        console.log (argument);
    }
*/

//40_01_01.60

/*
    const firstOut = ( ) => console.log ('One');

    const secondOut = () =>  console.log ('Two');

    const thirdOut = ( ) =>{
        console.log('Three');
        firstOut();
        secondOut();
    }

    const fourthOut = () => {
        console.log ('Four');
        setTimeout(firstOut);
        thirdOut();
    }
*/

//40_01_01.70

/*
    let number = 127483;
    function inverti (number){
    let reversed = number.toString().split('').reverse().join('')
    reversed = Number(reversed);
    console.log (reversed);
    return (reversed);
    }

    inverti(number);
*/

//40_01_01.80

/*
    let parola = 'racecar'

    function isPalindrome (word) {
        let copy = word.toLowerCase();
        let reversed = copy.split('').reverse().join('');
        let palindrome = false
        if ( reversed === copy ) palindrome = true;
        return palindrome;
    }

    console.log("La parola è palindroma: ", isPalindrome(parola));
*/

/* versione alternativa Carturan Luca più elegante ed economica

const isPalindrome (word) => {
    return word === word.split('').reverse.join('');
}

//40_01_01.90

/*
    function capitalize (sentence =  ' ') {
        let words = sentence.split(' ');
        for (index in words){
            words [index] = words[index].split('');
            words [index][0] = words [index][0].toUpperCase();
            words [index] = words [index].join('');
        }
        words = words.join(' ');
        return words;
    }

    let frase = "life's but a walking shadow a poor player that struts and frets his hour upon the stage and then is heard no more. it is a tale told by an idiot full of sound and fury signifying nothing";
    console.log(capitalize(frase));
*/

//40_01_01.95



//40_01_01.100

//1. 10, tester fa quello che deve fare ma 
//il valore non viene salvato da nessuna parte

//2. Hello

//3. Hello javascript my name is javascript

//4. 19

//5. 16