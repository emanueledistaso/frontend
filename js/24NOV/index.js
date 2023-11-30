//1.

/*
    function calculateArea(height, base) {
    return base * height;
    }

    function calculatePerimeter(height, base) {
    return 2 * (height + base);
    }

    console.log(
    `l'area del rettangolo è: ${calculateArea(
        8,
        5
    )}. il suo perimetro è: ${calculatePerimeter(8, 5)} `
    );
*/

//2.

 /*
     let names = ['Mario', 'Gianluigi', 'Francesca', 'Ugo', 'Arnaldo'];
     function nameLengths (names) {
         let stringLengths = [];
         for (let name of names){
             stringLengths.push(name.length);
         }
         return stringLengths;
     }
     console.log (nameLengths(names));
 */

//3

/*
    const cart = {
        items: [],
        addProduct: function (item){
            this.items.push(item);
        },
        calculateTotal: function () {
            return this.items.length;
        }
    }

    cart.addProduct('Lettuce');
    cart.addProduct('Pasta');
    cart.addProduct('Broccoli');
    cart.addProduct( 'Chicken');
    console.log(cart.calculateTotal());
*/

//4

/*
    function countWords (sentence){
        return sentence.split(' ').length;
    }

    let sentence = 'The quick brown fox';
    console.log (countWords(sentence));
*/

//5

/*
    function reverseString (str) {
        return str.split('').reverse().join('');
    }

    console.log (reverseString('stringaesempio'));
*/

//6

/*
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,14];

    function filterEvenNumbers (numbers){
        return numbers.filter((number) => (number%2===0));
    }

    console.log (filterEvenNumbers(numbers));
*/

//7

/*
    function areAnagrams(word1, word2) {
    let anagrams = true;
    let i = 0;
    if (word1.length != word2.length) {
        anagrams = false;
    } else {
        let l = word1.length;
        while (anagrams && i < l) {
        let letter = word1.charAt(i);
        let index = word2.indexOf(letter);
        if (index == -1) anagrams = false;
        else word2[index] = "";
        i++;
        }
    }
    return anagrams;
    }

    let word1 = "manna";
    word2 = "aannm";
    console.log(areAnagrams(word1, word2));
*/

//8
/*
    function convertCurrency (usd, rate) {
        return (usd * rate).toFixed(2); 
    }

    console.log(convertCurrency(10,.56));
*/

//9

/*
    function calculateAge (year){
        return 2023 - year;
    }

    console.log (calculateAge(1998));
*/

//10

/*
    function rollDice() {
    return Math.floor(1 + Math.random() * 6);
    }

    let results = [];
    for (let i = 0; i <= 7; i++) {
    results.push(rollDice());
    }

    console.log(results);
*/

//11

/*
    function convertCelsiusToFahrenheit(temp) {
    return ((temp * 9) / 5 + 32).toFixed(2);
    }

    console.log(convertCelsiusToFahrenheit(-21));
*/

//12

/*
    const book = {
        title: 'Assassin\'s Quest',
        author: 'Robin Hobb', 
        year: 1997,
        genre: 'fantasy',
        getInfo: function () {
            return `${this.title} is a ${this.genre} novel by author ${this.author}. It was published in ${this.year}`;
        }
    }
    let str = book.getInfo.bind(book)
    //console.log((book.getInfo.bind(book))());
    console.log(str());
*/

//13

/*
    const shoppingList = {
        items: [],
        addItem: function (item){
            this.items.push(item);
        },
        removeItem: function (item){
            this.items.splice(this.items.indexOf(item),1);
        }
    }

    shoppingList.addItem('Lettuce');
    shoppingList.addItem('Pasta');
    shoppingList.addItem('Broccoli');
    shoppingList.addItem( 'Chicken');
    shoppingList.removeItem( 'Lettuce');
    console.log('Number of items: ', shoppingList.items.length)
    console.log('Contents of list: ', shoppingList.items);
*/

//14
/*
    const budgetCalculator = {
    income: 0,
    expenses: 0,
    log: [],
    addIncome: function (money) {
        this.displayResume(money);
        this.income += money;
    },
    addExpense: function (money) {
        this.displayResume(-money);
        this.expenses += money;
    },
    displayResume: function (money) {
        this.log.push(money);
    },
    };

    budgetCalculator.addIncome(35);
    budgetCalculator.addExpense(15);
    console.log(budgetCalculator.log);
*/

//15

/*
    function createSong(title, artist, duration) {
    let song = {
        title,
        artist,
        duration,
        displayInfo: function () {
        console.log(
            `${this.title} by ${this.artist}, song length : ${this.duration}`
        );
        },
    };
    return song;
    }

    function createPlaylist(name) {
    let playlist = {
        name,
        songs: [],
        addSong: function (song) {
        this.songs.push(song);
        },
        removeSong: function (song) {
        this.songs.splice(this.songs.indexOf(song), 1);
        },
        displayPlaylist: function () {
        console.log(`Title: ${name}`);
        this.songs.forEach((song) => song.displayInfo());
        },
    };
    return playlist;
    }

    let canzone1 = createSong("song1", "author1", 2.02);
    let canzone2 = createSong("song2", "author2", 3.02);
    let canzone3 = createSong("song3", "author3", 3.17);
    let myPlaylist = createPlaylist("myPlaylist");
    myPlaylist.addSong(canzone1);
    myPlaylist.addSong(canzone2);
    myPlaylist.addSong(canzone3);
    console.log(myPlaylist.displayPlaylist());
*/

//16

/*
    const caloriesCalculator = {
    lunch: [],
    dinner: [],
    addFood: function (food, meal) {
        if (meal == "lunch") {
        this.lunch.push(food);
        }
        if (meal == "dinner") {
        this.dinner.push(food);
        }
    },
    calculateDailyCalories: function () {
        let total = 0;
        this.lunch.forEach((food) => (total += food.calories));
        this.dinner.forEach((food) => (total += food.calories));
        return total;
    },
    };

    let food1 = {
    name: "pasta",
    calories: 384,
    };

    let food2 = {
    name: "prosciutto",
    calories: 145,
    };

    let food3 = {
    name: "cheese",
    calories: 264,
    };

    caloriesCalculator.addFood(food1, "lunch");
    caloriesCalculator.addFood(food2, "lunch");
    caloriesCalculator.addFood(food3, "dinner");
    let totalCalories =
    caloriesCalculator.calculateDailyCalories.bind(caloriesCalculator);
    console.log(totalCalories());
    console.log(caloriesCalculator.lunch, caloriesCalculator.dinner);
*/
