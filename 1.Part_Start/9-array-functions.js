// const users = ["Mehmet", "Ahmet", "Murat"]

// En çok kullanacağımız array fonksiyonları methodları.
// push, map, find, filter, some, every, includes...

//--------------------------------------------------------------------------------------------------------------------

//push 

//array'ın sonuna yeni bir eleman ekler. 

// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

//--------------------------------------------------------------------------------------------------------------------

// .map() 

// Array componentlerimizde en çok kullandığımız methodumuz bu.

// const users = ["Mehmet", "Ahmet", "Murat"]

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// map fonksiyonu diyor ki senin elle vermene gerek yok ben zaten hepsini tek tek dönücem diyor

// users.map((item) => {
//     console.log(item)
// })


// Veya array'in içinde objeler olsaydı.

// const users = [{
//     name:"Mehmet"

// }, {
//     name: "Ahmet"
// }, {
//     name: "Sevilay"
// }
// ] 

// users.map((item) => {
//     console.log(item)
// })


// item altında name'i yazdırmak istersek;

// users.map((item) => {
//     console.log(item.name)
// })

//--------------------------------------------------------------------------------------------------------------------

// .find()

// array'iniz içersinde verdiğiniz koşullarla bir arama işlemi yapar. Koşula uyan ilk veriyi döndürür diğerlerine geçmez.
// const users = [{
//     name:"Mehmet"
// }, {
//     name: "Ahmet"
// }, {
//     name: "Sevilay"
// }
// ] 

// const result = users.find((item) => item.name === "Mehmet") // item.name'i "Mehmet'e" eşit olanı bana getir dedik.

// console.log(result); //{ name: 'Mehmet' }

// Koşullara uyan bir şey olmasaydı undefined dönerdi.

// const users = [{
//     name:"Mehmet",
//     age: 18,
// }, {
//     name: "Mehmet",
//     age: 29,
// }, {
//     name: "Sevilay"
// }
// ] 

// const result = users.find((item) => item.name === "Mehmet" && item.age > 20)
// console.log(result); //{ name: 'Mehmet', age: 29 } biz 18'i 30 yapsaydık üsttekini getirirdi çünkü bulduğu ilk elemanı getiriyor.

//--------------------------------------------------------------------------------------------------------------------

// .filter()

// Gene sık kullanılan methodlardan biri filtreleme yapar. İsmi "Mehmet" olanları veya yaşı 30'dan küçük olanları getir diyebiliriz.

// const users = [{
//     name:"Mehmet",
//     age: 30,
// }, {
//     name: "Mehmet",
//     age: 29,
// }, {
//     name: "Sevilay",
//     age: 40,
// }
// ] 


// const filtered = users.filter((item) => item.name === "Mehmet")

// console.log(filtered); // [ { name: 'Mehmet', age: 30 }, { name: 'Mehmet', age: 29 } ]

// const filtered = users.filter((item) => item.age < 30)

// console.log(filtered); //[ { name: 'Mehmet', age: 29 } ]

// item yazmak istemiyorsak doğrudan name ve age'de yazabiliriz.

// const filtered = users.filter(({name, age}) => name === "Mehmet" && age < 30) // {name, age} süslü paranteze almayı unutma.

// console.log(filtered); // [ { name: 'Mehmet', age: 29 } ]

//-------------------------------------------------------------------------------------------------------------------

// .some()

//array'in içersindeki elemanlardan biri verdiğimiz koşula uyuyorsa true döner uymuyorsa false döner.

// const users = [{
//     name:"Mehmet",
//     age: 10,
// }, {
//     name: "Mehmet",
//     age: 29,
// }, {
//     name: "Sevilay",
//     age: 40,
// }
// ] 

// yaşı 10'a eşit olan var mı diye kontrol edelim.

// const some = users.some((item) => item.age === 10)
// console.log(some); // true

// const some2 = users.some(({age}) => age === 29)
// console.log(some2); //true

//-------------------------------------------------------------------------------------------------------------------

// .every()

// some'ın kardeşi every array'in tüm elemanlarının şarta uymasını bekliyor uyarsa true uymazsa false döner.

const users = [{
    name:"Mehmet",
    age: 10,
}, {
    name: "Mehmet",
    age: 29,
}, {
    name: "Sevilay",
    age: 40,
}
] 

// const every = users.every((item) => item.age > 5);
// console.log(every); // true

// const every2 = users.every((item) => item.name === "Mehmet");
// console.log(every2); // false

//-------------------------------------------------------------------------------------------------------------------

// .includes()

const meyveler = ["elma", "armut", "muz"]

const isIncluded = meyveler.includes("elma")

console.log(isIncluded); // true //portakal yazsaydım false gelirdi.

