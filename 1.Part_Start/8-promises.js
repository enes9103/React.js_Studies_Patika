// import fetch from "node-fetch";

// Biz önceki derste yukarıdaki gibi node-fetch kütüphanesini kullandık. Bunun yerine kullanabileceğimiz axios adında bir kütüphane daha var. Onun biraz daha kullanımı kolay söyle ki; aşağıda .json(); işlemini yapıyoruz ya axiosta buna gerek yok. Hemde react tarafına geçtiğimizde hep biz axios kullanıcaz o yüzden şimdiden göz aşinalığı olması iyi olur.

// axios adındaki kütüphaneyi npm i axios yazarak kuruyoruz. ve aşağıda node-fetch yerine axios'u yazıyoruz.

// import fetch from "node-fetch";
// import axios from "axios";

(async () => {

    const users =  (await axios("https://jsonplaceholder.typicode.com/users"))
    
   
    const post1 =  (await axios("https://jsonplaceholder.typicode.com/posts/1"))
    
   
    const post2 =  (await axios("https://jsonplaceholder.typicode.com/posts/2"))
    
   
   
    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
   
      })
      
      ()

      // Yukarda fetch ifadelerinin yerine axios yazdık, .json() işlemlerini ve json kullandığımız için kullanmamız gereken await işlemlerini sildim.
      // Bunu yukardaki şekilde çalıştırdığımızda anlam veremediğimiz datalar geliyor.
      // Bunun nedeni axios bize users post1'in altında birer data getiriyor. Yani data adında bir field getiriyor.

import fetch from "node-fetch";
import axios from "axios";

// (async () => {

//     const {data: users} =  (await axios("https://jsonplaceholder.typicode.com/users"))
    
   
//     const {data: post1} =  (await axios("https://jsonplaceholder.typicode.com/posts/1"))
    
   
//     const {data: post2} =  (await axios("https://jsonplaceholder.typicode.com/posts/2"))
    
   
   
//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
   
//       })
      
//       ()

      // böyle yaparsak ilgili kullanıcılar bize gelir. hepsi data olarak dönüyor hepsini farklı şekilde sunmak için : ile açıklayabiliriz.
      // Bu da fetch'e göre çok daha kullanışlı. 


// PROMİSES

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

// Yukarda en üstte fetch diye bir kütüphane yazmışlar, sonra then ile devame ediyor, bu then fetch aslında bir promises dönüyor demek. Yani ben fetch gibi yazdığımda then ile devam edebileceğim fonksiyonlar nasıl yazabilirimin cevabını vermeye çalışcam.

// const getComments = () => {
//      return new Promise((resolve, reject) => {
//            console.log("Comments")

//            resolve();
//      });
// };

// getComments() 
// .then(() => console.log("Bitti"))
// .catch(e => console.log("error")); 

// Promise'ın callback fonksiyonunda resolve ve reject adında 2 parametre var resolve demek bu işlem başarıyla gerçekleşmiş al sana datam demek reject ise kod çalışırken bir problem oluştu bunu reddettim demek.

// Bir promise resolve olduğunda then çalışır reject olduğundada catch çalışır.


// Yukarda bir fetch bir data sağlanıyordu ve biz onu kullanıyorduk biz nasıl yapcaz. aşağıdaki gibi data'yı resolve ederken parametre geçebiliriz. 

// const getComments = () => {
//       return new Promise((resolve, reject) => {
//               resolve("Comments");
//       });
//  };
 
//  getComments() 
//  .then((data) => console.log(data)) // burda resolve'un içindeki data geldi ve onu console ile yazdırdım. Ekrana comments yazdı. Bu demek oluyorki resolve ile geçilen parametre then'e düştü. Burda string number ve objede dönebiliriz.
//  .catch(e => console.log("error")); 

// const getComments = (number) => {
//       return new Promise((resolve, reject) => {

// if(number === 1) {
//       resolve( {text: "Selam"} );
// }
//        reject("Bir problem oluştu!")       
//       });
//  };   
 
//  getComments(2) 
//  .then((data) => console.log(data)) 
//  .catch(e => console.log(e)); 

 // Yukarda getComments 1 gönderildiğinde resolve olur 2 gönderildiğinde reject çalışır.

 // Yukardaki asycn ile çalışan kısımları biz promise'ımız ile dönecek şekilde oluşturmaya çalışalım.

//  const getUsers = () => {
//       return new Promise(async(resolve, reject) => {

//             const {data} =  await axios(
//                "https://jsonplaceholder.typicode.com/users")
               
//                resolve(data)
//       });
//  };   
 
//  const getPost = (post_id) => {
//       return new Promise(async (resolve, reject) => {

//             const {data} =  await axios(
//                "https://jsonplaceholder.typicode.com/posts/" + post_id
//                );

//                resolve(data);
//       });
//  };   
 

//  (async () => {
//     const users = await getUsers();
       
      
//      const post = await getPost(1) 
     

//       console.log(users);
//       console.log(post);

//  }) ()
 
// Aşağıdaki then ve catch'den kurtulmak için yukardaki gibi yaparız.

//  (async () => {
//      await getUsers() 
//       .then((data) => console.log(data)) 
//       .catch((e) => console.log(e)); 
      
//      await getPost(1) 
//       .then((data) => console.log(data)) 
//       .catch((e) => console.log(e)); 
//  }) 

// () // En son çalıştırmak için parantezi eklemeyi unutma. Ve bu şekilde yaptığımızda artık veriler sıralı şekilde gelir.

//  getUsers() ve getPost(1) sıralı değil biz bunu sıralıcaz anonim fonksiyonla. Yani yukarda anonim fonksiyonu yazıp içine yerleştirerek sıralı hale getirdik. Ve sıraya koymak için async ve await ifadelerini ekledik.

//  getUsers(2)  ------>>>>>  
//  .then((data) => console.log(data)) 
//  .catch((e) => console.log(e)); 
 
//  getPost(1) 
//  .then((data) => console.log(data)) 
//  .catch((e) => console.log(e)); 

 // await mutlaka async bir fonksiyonun içinde olmalı o yüzden async'yi promise'ın içine ekledik. Tekrar denediğimizde ilgili çıktıyı görüntüleriz. Sonradan bide postları çeken bir tanım olusturduk userslardan sonra.

 // await mutlaka async bir fonksiyonun içinde olmalı o yüzden async'yi promise'ın içine ekledik. Tekrar denediğimizde ilgili çıktıyı görüntüleriz. Sonradan bide postları çeken bir tanım olusturduk userslardan sonra.


 

 const getUsers = () => {
      return new Promise(async(resolve, reject) => {

            const {data} =  await axios(
               "https://jsonplaceholder.typicode.com/users")
                
               resolve(data)
            // reject("Bir sorun oluştu!")
      });
 };   
 
 const getPost = (post_id) => {
      return new Promise(async (resolve, reject) => {

            const {data} =  await axios(
               "https://jsonplaceholder.typicode.com/posts/" + post_id
               );

               resolve(data);
            // reject("Bir sorun daha oluştu!")
      });
 };   
 
// Peki burda bir hata varsa bunu nasıl yakalıcaz. Try catch blogları ile.

//  (async () => {
//        try{
//             const users = await getUsers();
//             const post = await getPost(1) 
             
        
//               console.log(users);
//               console.log(post);
//        }catch(e){
//              console.log(e)
//        }
    

//  }) ()

 // Bunların hepsini birden de çalıştırabilirim. Promise ol diye bir ifade var o ifadeyle tüm promise'leri çalıştırıp sonucu bekleyebilirim

 Promise.all([getUsers(), getPost(1)])
 .then(console.log)
 .catch(console.log); 
 
 // Burda verdiğimiz array'de tüm promiselarımız bulunuyor. then bloğuna düştüğünde direk datayı loglasın catch kısmına düştüğünde ise direk hatayı loglasın. 
 // Resolve ettiğimde çalışıyor, reject ettiğimde ise ilk çalıştığı gibi çalışıyor.

 // Bu elimizde birden fazla sıralı çalıştırmak istediğimiz  promise dizisi varsa kullanabileceğimiz yöntemlerden biri.



