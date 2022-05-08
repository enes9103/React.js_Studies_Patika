// State Nedir? Nasıl Oluşturulur?

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Mehmet");
//   const [age, setAge] = useState(29);
//   console.log(age, name);
//   return (
//     <div className="App">
//       <h1>Merhaba {name}!</h1>
//       <h2>{age}</h2>
      
//       <button onClick={(() => setName("Ahmet"))} >Change Name</button>
//       <button onClick={(() => setAge("26"))} >Change Age</button>
//     </div>
//   );
// }

// export default App;

// react'in altında useState diye bir hook var. Bunu import ettikten sonra componentimin içinde fonksiyonun içinde return'in hemen dışında bir tanım yapıcaz. isim verilerini tutan bir state tanımlamamız gerekiyor. ilk olarak state'in ismini tanımlıyoruz bu ismi return ettiğimiz kısımda kullanıyoruz. Sonra bu state'in değerini değiştirecek olan fonksiyonun ismini vermem gerekiyor. Genelde state ismi name ise değğerini değiştirecek fonksiyon setName seklinde belirtilir. age ise setAge gibi. Bu bir zorunluluk değil sadece genel yazım standartı bu şekilde oluşmış durumda okuyacağımız bir çok kaynak kodu da gene böyle görücez. 

// Daha sonra useState hook'unu kullaanarak state'imiz olusturduk. useState'in açmış olduğumuz fonksiyona bir parametre verebiliyoruz. Parametrenin anlamıda şu bu state ilk oluşturulurken bir değer ataması yapabilirsiniz o yüzden burda "Mehmet" diye verdik. Daha sonra tanımladığımız state'i süslü parantezler içersinde kullanıcaz.

// Burda click butonuna basınca Mehmet Ahmet oluyor. Burda javascript'in bize vermiş olduğu tüm veri tipleriyle state tanımlamamızı yapabiliriz string number booolean gibi.

// Bu dersteki en önemli keyword'ümüz useStatedir. useState kullanarak herhangi bir state olusturabiliriz ve onu return ettiğim kısımla component'in içinde return ettiğim jsx'in herhangi bir yerinde kullanabiliriz.

// İlla return'in içinde kullanıcaz diye bir sey yok yukarda da kullanabiliriz onu 

// Herhangi bir state güncellendiği anda return'ün içindeki render işlemi baştan yapılır yani o görüntü yeniden olusturulur çünkü state değişti state değiştiği içinde arayüzde görünmesi gereken ifade değişti dolayısıyla component render ediliyor. Bunu yukardaki consolun içindeki değişiklikten anlarız. Ama render edilirkende dikkat etmemiz gereken konular var mesela gereksiz render'ı önlememiz gerekiyor.

//--------------------------------------------------------------------------------------------------------------------

// // Array States

// // Şimdide state'imizi bir array olarak tanımlayıp bu state'i nasıl güncellleyebileceğimizi öğrenmeye çalışcaz. Daha önceki dersimizde string ve number olarak birer state olusturmustuk. Şimdi de bir array state'i olsun elimizde.

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Mehmet");
//   const [age, setAge] = useState(29);
//   const [friends, setFriends] = useState(["Ahmet", "Murat"]); 

//   console.log(age, name);
//   return (
//     <div className="App">
//       <h1>Merhaba {name}!</h1>
//       <h2>{age}</h2>
      
//       <button onClick={(() => setName("Ahmet"))} >Change Name</button>
//       <button onClick={(() => setAge("26"))} >Change Age</button>

//       <hr />
//       <br /><br />

//       <h2>Friends</h2>
       
//        {
//          friends.map((friend, index) => (
//          <div key={index}>{friend}</div> // Burdaki div etiketi yerine başka bir HTML etiketi de olabilir. Burda dikkat etmemiz gereken şey listeleme işlemi yapıyorsak en dıştaki etikete bir key propu vermemiz gerekirdu. bu propa istediğimiz ismi verebiliriz index vs gibi.
//          ))} 

//          <br />

//        <button onClick={(() => setFriends([...friends, "Ayşe" ]))} >Add new friend</button> 
//     </div> // Ben bu friends array'inin içine ekleme çıkarmayı yukardaki gibi yaparım.Burada en büyük yapılan hata, mesela setFriends("Ayşe") yazdık bu bir string ama yukarda setFriends'i bir array olarak tanımladık. Array olarak tanımladığımız için map işlemi yaptık. Friends'e string atadığımızda array string olarak değişeceği için map işlemi patlamış oluyor. Dolayısıyla map is not a function hatasını alıyoruz. 
    
//     // State'lerde atama işlemi yaparken ilk bakmamız gereken şey tanımladığınız state'in başlangıçtaki veri tipi neydi buna uygun şekilde atama yapmamız lazım, arrayse array number ise number vs. 
    
//     // Dolayısıyla biz bir string ataması yapamayız varsayılan değer array olduğu için array atamalıyız. setFriends(["Ayşe"]) yani böyle bu seferde butona basınca sadece Ayse kaldı. Bunun sebebi setFriends'in içinde sadece Ayşe elemanının olması yani friends'in içinde var olan tek değer Ayşe olduğu için sadece o görünüyor. 

//     // Yapmamız gereken friends'in içinde daha önce var olan değerleri de koruyarak bu atama işlemini yapmamız gerekkiyor. O yüzden ...friends yazarak daha önceki friends array'inin içindeki elemanlarıda koyuyoruz. Başına eklemek istersekte alıp başına koyarız Ayşe yazısını.

//     // statelerde çalışırken array state'i üzerinde çalışmak bu kadar basit. En önemli iki konu önceki değerleri korumak ...friends gibi ve ilk tanımlanan veri türüne uymak array ise array girilir
//   );
// }

// export default App;


//--------------------------------------------------------------------------------------------------------------------

// Object States

// Şimdi de bir state'i obje olarak tanımlayıp nasıl güncelleyebileceğimizi öğreneceğiz.

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Mehmet");
//   const [age, setAge] = useState(29);
//   const [friends, setFriends] = useState(["Ahmet", "Murat"]); 
//   const [address, setAddress] = useState({ title: "Istanbul", zip: 48770});

//   console.log(age, name);
//   return (
//     <div className="App">
//       <h1>Merhaba {name}!</h1>
//       <h2>{age}</h2>
      
//       <button onClick={(() => setName("Ahmet"))} >Change Name</button>
//       <button onClick={(() => setAge("26"))} >Change Age</button>

//       <hr />
//       <br /><br />

//       <h2>Friends</h2>
       
//        {
//          friends.map((friend, index) => (
//          <div key={index}>{friend}</div> 
//          ))} 

//          <br />

//        <button onClick={(() => setFriends([...friends, "Ayşe" ]))} >Add new friend</button> 

//        <hr />
//       <br /><br />

//  <h2>Adress</h2>
//  <div> {address.title} {address.zip}</div>


//       <br /><br />

//  <button onClick={(() => setAddress({ ...address, title: "Ankara"}))} >Change the Address</button>
//     </div> 

//     // Butona basınca address datasını manipüle etmek istersek. default'u obje olduğu için gene obje vermemiz gerekiyor, "setAddress({})". setAddress({ ...address, title: "Ankara"}) sadece title 'ı güncelleriz bu şekilde.  .tüm bilgileri güncellemek istersek ..address'i eklememize gerek yok. Güncellemek istemediğimiz bigileri otomatik olarak tutmak için gerekli o. 

//     // Arrayden tek farkı köşeli parantez koymak yerine süslü parantez koymak.
//   );
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------------
