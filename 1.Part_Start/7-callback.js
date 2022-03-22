// setTimeOut

// setTimeOut native bir fonksiyon 2 tane parametre alıyor. Bu fonksiyonun olayı vereceğimiz parametredeki süre tamamlandıktan sonra bir kere çalışıyor olması. 2 tane parametre alacak 1. bir fonksiyon  2. sinde ise bir ms cinsinden değer vermemiz istenecek mesela 2000 girersek 2 sn sonra o işlem yapılacak anlamına geliyor 

setTimeout(() => {
    console.log("Merhaba")
}, 5000)

// setInterval

// Benzer parametreleri alır ve verdiğimiz saniye olarak verdiğimiz aralıklarla çalışır.

// setInterval(() => { 
//     console.log("Ben her saniye çalışacağım")
// }, 1000);

// Adım 1

// const sayHi = () => {
//     console.log("Merhaba");
// }

// sayHi() // Bunun yerine

// Adım 2

// const sayHi = (cb) => {
//     cb(); // yukarda girdiğimiz parametreyi çalıştırdık.
// }

// sayHi(() => {
//     console.log("Hello")
// });

// Adım 3

// javascriptte herhangi bir veriye gidip veriyi çekebilmek için bize verilmiş olan native bir fonksiyon daha var, ismi fetch bu herhangi bir veri kaynağına gidiyor oradan veriyi alıp bize gösteriyor.

// fake api yazarak google'a fake user sekmesinden bir apı bulduk şimdi node.js projemiz aracılığı ile bu içeriğe erişmeye çalışcaz.

// import fetch from "node-fetch"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => (data.json()))
// .then((users) => console.log(users));

// Burda neler dönüyor?
//apı'dan bize data döndükten sonra data ile apı'dan ne geliyorsa o getiriliyor sonra native fetch kütüphanesi doğrudan bize bir json dönmüyor bir json parse etmemiz gerekiyor. Daha sonra json users'a düşüyor ve ben ordan alıp kullanmaya devam ediyorum users ile fetch işlemi bu şekilde yapılıyor. 

// import fetch from "node-fetch"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => (data.json()))
// .then((users) => {
// console.log("Users yüklendi!", users)

// fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json())
// .then(posts => console.log("Postlar Yüklendi",posts)) 
// });

// ben yukarıdaki işlemler bitsin sonra yeni işlemler olsun dediğim için then'in içinde yazıyorum.
// Önce userlar sonra postlar yüklenecek.

// import fetch from "node-fetch"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => (data.json()))
// .then((users) => {
// console.log("Users yüklendi!", users)

// fetch("https://jsonplaceholder.typicode.com/posts/1").then(data => data.json())
// .then(post => console.log("Post Yüklendi",post)) 
// });

// Yukarda user ile daha kısa bir veri çektik.

// import fetch from "node-fetch"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => (data.json()))
// .then((users) => {
// console.log("Users yüklendi!", users)
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1").then(data => data.json())
// .then(post => console.log("Post Yüklendi",post)) 

//Yukardaki gibi yazarsak biz sıraya koyamayız yani böyle yazdığımızda bazen post verisi önce gelir bazen users verisi biz bunu ayarlamak istiyorsak 2 yukardaki gibi aynı paranteze koyup then ile sıralamamız gerek.

// Yani burda amacımız sıraya koymak o yüzden de callback fonksiyonlar içersinde ilerleyebiliyoruz. 

// import fetch from "node-fetch"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
// console.log("Users yüklendi!", users)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data) => data.json())
// .then((post) => { 
//     console.log("Post 1 Yüklendi",post)

// fetch("https://jsonplaceholder.typicode.com/posts/2")
// .then((data) => data.json())
// .then((data) => console.log("Post 2 Yüklendi", data))
//    });
// });


// post yüklendikten sonra da bir fetch işlemi yapmak istersem.
// sıralı bir şekilde çalışır çünkü biz bu işlemleri sıraya koyduk.

// import fetch from "node-fetch"; 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
// console.log("Users yüklendi!", users)
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data) => data.json())
// .then((post) => { 
//     console.log("Post 1 Yüklendi",post)
// });

// fetch("https://jsonplaceholder.typicode.com/posts/2")
// .then((data) => data.json())
// .then((data) => console.log("Post 2 Yüklendi", data))

// Böyle yaparsak sıralı bir şekilde yüklenmez çünkü ortak paranteze almadık.

// import fetch from "node-fetch"; 

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
console.log("Users yüklendi!", users)

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((data) => data.json())
.then((post) => { 
    console.log("Post 1 Yüklendi",post)

fetch("https://jsonplaceholder.typicode.com/posts/2")
.then((data) => data.json())
.then((data) => console.log("Post 2 Yüklendi", data))
   });
});

// Peki böyle güzel ama bu oldukça karmaşık gözüküyor burda 3 tane değilde 10 tane işlem olsa böyle mi yapacağız?
// Bu noktada keywordleri kullanarak bu işi kolaylaştırabiliriz.

// import fetch from "node-fetch"; 

async function getData() {
 const users = await (await fetch("https://jsonplaceholder.typicode.com/users"))
 .json();

 const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1"))
 .json();

 const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2"))
 .json();


 console.log("users", users);
 console.log("post1", post1);
 console.log("post2", post2);
}

getData()

// async asengron anlamında 
// fetch'in başına await koymazsam burda beklemez bir sonraki satıra devam eder. 
// await ifadesini koyduğumuzda çıktımızı aldık stringify şeklinde, json parse işlemini yapmadığımız için bu şekilde geldi.
//.json() işlemini de eklediğimizde istediğimiz gibi geldi.

// Bu yapı ile üstündeki yapı arasında büyük bir fark vardır kullanım kolaylığı açısından. Çalışma açısından aynı şeyi yapar.

// Burda dikkat etmemiz gereken şey async ve await ifadelerini kullanmak.



   // Burda biz getData isimli bir fonksiyon kullanmak istemeyebiliriz, doğrudan extra bir fonksiyon çalıştırmak zorunda kalmamak isteyebiliriz. bizim async ifadesini mutlaka yazmamız lazım yani bir fanksiyon mutlaka elimizde olmalı illa getData isimli bir fonksiyonumuz olmamasını istiyorsak anonim bir fonksiyon oluşturabiliriz.

   //JavaScript'te anonim fonksiyon nasıl olusturulur? 

   import fetch from "node-fetch";

   (async () => {

 const users = await (await fetch("https://jsonplaceholder.typicode.com/users"))
 .json();

 const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1"))
 .json();

 const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2"))
 .json();


 console.log("users", users);
 console.log("post1", post1);
 console.log("post2", post2);

   })
   
   ()

   // Bu şekilde anonim fonksiyon yazabiliriz.


  //Sonuc
  
  //call back yapılarını ve async await yapılarını react'ta sıkça kullanıcaz.


