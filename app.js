/*-----------------------------------37-VIDEO------------------------------*/

// const ucer = {
//   name: 'Davronbek',
//   age: 22,
//   email:'davronbekanvarov23@gmail.com',
//   location:' Fargona',
//   lang: ["english", "russian", "uzbek"],
// };

// console.log(ucer)
// console.log(ucer.email)

// ucer.age=23
// console.log(ucer.age)

// console.log(ucer['location'])
// ucer['name']='Alisher'
// console.log(ucer.name)

// console.log(typeof ucer)

/*-----------------------------------38-VIDEO------------------------------*/

// const ucer = {
//   name: "Davronbek",
//   age: 22,
//   email: "davronbekanvarov23@gmail.com",
//   location: " Fargona",
//   lang: ["english", "russian", "uzbek"],
//   login: function () {
//     console.log("siz saytga kirdingiz");
//   },
//   logout: function () {
//     console.log("siz saytdan chiqdingiz");
//   },
// };
// ucer.login();
// ucer.logout();

/*-----------------------------------39-VIDEO------------------------------*/

// const ucer = {
//   name: "Davronbek",
//   age: 22,
//   email: "davronbekanvarov23@gmail.com",
//   location: " Fargona",
//   langs: ["english", "russian", "uzbek"],
//   login: function () {
//     console.log("siz saytga kirdingiz");
//   },
//   logout: function () {
//     console.log("siz saytdan chiqdingiz");
//   },
//   speak: function () {
//     console.log("I can speak: ");
//     this.langs.forEach((lang) => {
//       console.log(lang);
//     });
//   },
// };

// ucer.speak()

/*-----------------------------------40-VIDEO------------------------------*/

// const movies = [
//   { name: "Avangers", likes: 458 },
//   { name: "Sherlock", likes: 581 },
//   { name: "Titanic", likes: 987 },
//   { name: "Avatar", likes: 1256 },
// ];
// movies.forEach((movie) => {
// //   console.log(movie.name);
//   console.log(`kino nomi:${movie.name}, likes: ${movie.likes} ❤`)
// });

/*-----------------------------------41-VIDEO------------------------------*/

// console.log(Math);
// console.log(Math.E);
// console.log(Math.PI);

// const area = 7.1;

// console.log(Math.round(area))
// console.log(Math.floor(area));
// console.log(Math.ceil(area))
// console.log(Math.trunc(area))
// const randomNumber = Math.trunc(Math.random() * 10) + 1;
// console.log(randomNumber);

/*--------------------3-AMALIYOT-------------------------*/

/*--------------------1-MASHQ-------------------------*/

// const myArrey = [[false, true], [1, 2], 99, "yaxshi"];

// for
// for (let i = 0; i < myArrey.length; i++) {
//   if (typeof myArrey[i] == "string") {
//     console.log("String index:", i);
//   }
// }

// myArrey.forEach((item, i) => {
//   if (typeof item[i] == "string") {
//     console.log("String index:", i);
//   }
// });

/*--------------------2-MASHQ-------------------------*/

// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const newData = [];
// data.forEach((item) => {
//   const res = Array.isArray(item);
//   if (res) {
//     item.forEach((num) => {
//       newData.push(num);
//     });
//   }
// });

// console.log(newData);

/*--------------------3-MASHQ-------------------------*/

// const checkData = [null, "false", 0, 99, false, undefined, "", NaN, "0"];
// const falsey = [];

// checkData.forEach((item) => {
//   if (!item) {
//     falsey.push(item);
//   }
// });
// console.log(falsey);

/*--------------------4-MASHQ-------------------------*/
// 1-usul
// const word = "Samarqand";
// const splitWord = word.split("").reverse();
// let newWord = "";
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i];
// }
// console.log(newWord);

// FOREACH

// const word = "Samarqand";
// const splitWord = word.split("").reverse();
// let newWord = [];
// splitWord.forEach((item) => {
//   newWord.push(item);
// });
// console.log(newWord);

// 2-usul
// const word = "samarqand";
// const splitWord = word.split("");
// let newWord = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += splitWord[i];
// }
// console.log(newWord);

/*--------------------5-MASHQ-------------------------*/

// const word = prompt("Biror gap kiriting")
// const splitWord = word.split(" ");
// let newWord = "";

// splitWord.forEach((item) => {
//   const boshi = item.charAt().toLowerCase();
//   const davomi = item.slice(1).toLocaleUpperCase();
//   newWord += " " + boshi + davomi;
// });

// console.log(newWord.trimStart());

/*--------------------6-MASHQ-------------------------*/

// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9];
// let naturalNumbers = 0;
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//     naturalNumbers += num;
//   }
// });

// console.log(naturalNumbers);

/*--------------------7-MASHQ-------------------------*/

// const words = "Qalesiz yaxshimisz ? Yaxshimi ishlar ?";
// let splitWords = words.split("");
// let counter=0
// splitWords.forEach((word) => {
//   if (word == "a" || word == "A") {
//     counter++;
//   }
// });

// console.log(`so'ralayotgan harf: ${counter}marta ishtirok etgan.`)

/*--------------------8-MASHQ-------------------------*/

// const types = [21.1, "Robiya", "array", ["I am array"], null, true, 214];
// const newTypes = [];

// types.forEach((type) => {
//   newTypes.push(typeof type);
// });
//  console.log(newTypes)

/*--------------------9-MASHQ-------------------------*/
// const word = "Uzbekiston";
// console.log(word.lastIndexOf(word.slice(-1))+1);

/*--------------------10-MASHQ-------------------------*/
// const numbers=[1,2,3,4,5]
// let result=[]
// numbers.forEach((num,i)=>{result.push(num+i)})
// console.log(result)

/*--------------------11-MASHQ-------------------------*/

// let counter = 0;

// for (let i = 1; i <= 10; i++) {
//   counter += i;
// }
// console.log(counter);

/*--------------------12-MASHQ-------------------------*/

// const number=+prompt('sonni kiriting')

// for (let i = 1; i <= 10; i++) {
//   let result = number * i + 1;
//   alert(result);
// }

/*--------------------13-MASHQ-------------------------*/

// let numbers = [1, 2, 3, 4, 5];
// let result = [];

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1);
//   });
// };
// reverseFunc(numbers)
// console.log(result)

/*--------------------14-MASHQ-------------------------*/

// const result = [];

// const fizzbuzzFanc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push("fizzBuzz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else {
//       result.push(i);
//     }
//   }
// };
// fizzbuzzFanc(100);
// console.log(result);

/*--------------------15-MASHQ-------------------------*/

// const Davronbekobj = {
//   name: "Davronbek",
//   LastName: "Anvarov",
//   age: 22,
//   region: "Fergana",
//   isMerried: false,
//   job: "Bugalter",
//   haqida: function () {
//     return `Assalomu alaykum,Mening ismim ${this.name},Familiyam ${
//       this.LastName
//     }.Yoshim ${this.age}da,${this.region}da yashayman.${
//       this.job
//     } bo'lib  ishlayman.${
//       this.isMerried ? "Uylanganman" : "Hali uylanmaganman"
//     }`;
//   },
// };
// let result = Davronbekobj.haqida();
// console.log(result);

/*-----------------------------------60-VIDEO------------------------------*/

// const movies = [
//   { name: "Avatar 3D ", year: 2008, rating: 9 },
//   { name: "Titanic 4D ", year: 1997, rating: 7 },
//   { name: "Forsaj 9 3D ", year: 2020, rating: 4 },
//   { name: "Avangers", year: 2012, rating: 6 },
// ];

// const filterMovies = movies.filter((movie) => {
//   return movie.name.includes("3D");
// });

// console.log(filterMovies);

// Foreach
// const newMovies = [];

// movies.forEach((movie) => {
//   if (movie.year > 2010) {
//     newMovies.push(movie);
//   }
// });
// console.log(newMovies);

/*-----------------------------------62-VIDEO------------------------------*/
// sort
// const movies = [
//   { name: "Avatar 3D ", year: 2008, rating: 9 },
//   { name: "Titanic 4D ", year: 1997, rating: 7 },
//   { name: "Forsaj 9 3D ", year: 2020, rating: 4 },
//   { name: "Avangers", year: 2012, rating: 6 },
// ];

// const sortedMovies = movies.sort((a, b) => {
//   return a.rating - b.rating;
// });
// console.log(sortedMovies);

// Alphabetical
// const names=['davronbek','ahror','doniyor','sardor']

// const sortedNames=names.sort()
// console.log(sortedNames)

// const numbers = [3, 1, 19, 11, 7, 5];

// const sortedNumbers = numbers.sort((a, b) => {
//   return b-a;
// });

// console.log(sortedNumbers);

/*-----------------------------------63-VIDEO------------------------------*/
// Ternary operation-uchlik operatori
// const age = prompt("Yoshingizni kiriting:", 18);

// if (age < 18) {
//   alert("siz voyaga yetmagansz");
// } else {
//   alert("siz voyaga yetgansz");
// }

// age < 18 ? alert("siz voyaga yetmagansz") : alert("siz voyaga yetgansz");

// age < 18
//   ? alert(`Siz armiya yoshidan ${18 - age} yosh kichiksz`)
//   : age < 28
//   ? alert(`siz armiyaga bora olasz`)
//   : alert(`sizni yoshingiz armiya yoshidan ${age - 28} yoshga kottasz`);

// &&
// const word=[1].length
//  word && console.log('hello world')
