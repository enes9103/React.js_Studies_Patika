// PROPS

// Props Nedir? Nasıl Kullanılır?

// Bu derste Reactin en önemli konularından biri olan Props konusuna bakıcaz. Props dediğimiz şey oluşturmak istediğimiz componentlerde bir parametre geçmek isteyebiliriz o parametrelerle o componentlerin initial görüntüsünü oluşturmak isteyebiliriz işte bu durumlarda kullanabileceğimiz bir yapı.

// Mesela biz aşağıda loggedIn durumuna göre kullanıcının adını soyadını veya giriş yapmadınız şeklindeki mesajı dışarda oluşturcağımız bir component haline getirelim. Onu kullanarak çağıralım ve onu gösterelim.

// user.js adında bir component olusturduk.

// import './App.css';
// import User from './components/user'

// function App() {
//   return(
//     <>
//     <User name="Mehmet" surName="Seven" isLoggedIn={true} age={29}/>
//     </>
//   )
// }
 
// export default App;

// Kendi yazacağımız User componentine parametreler geçtik. Gönderdiğimiz tüm propertyler fonksiyonumuzdaki ilk parametreye düşüyor. Geçmiş olduğumuz name property'sini hazırlamış olduğumuz componentte kullanmak için ne yapmamız gerekiyor. User componentine props parametresi olarak gelir.

// isLoggedIn bir boolen değer olduğu için onu string şekilde gönderemeyiz onu süslü parantezin içine alarak göndermeliyiz.

// surName ={"Seven"} şeklindede gönderebilirim.

// Burda göndermiş olduğumuz propertylerin sırasıyla user.js'de parametreleri aldığımız sıranın hiçbir önemi yok. Herhangi bir sırayla alıp kullanabiliriz.

//--------------------------------------------------------------------------------------------------------------------

// Döngülerde "key" prop'u

// şimdide elimizdeki component'i bir array geçicez yani prop olarak bir array vericez ve bu array'i o component'in altında listelemeye çalışcaz.

// import './App.css';
// import User from './components/user'

// function App() {
//   return(
//     <>
//     <User 
//     name="Mehmet" 
//     surName="Seven" 
//     isLoggedIn={true} 
//     age={29}
//     friends={["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"]}
//     />
//     </>
//   )
// }
 
// export default App;

// import './App.css';
// import User from './components/user'

// const friends = [
//   {
//     id: 1,
//   name: "Ahmet"
// }, 
// {
//   id: 2,
//   name: "Tayfun"
// }, 
// {
//   id: 3,
//   name: "Gökhan"
// }
// ]
// // Yukarıdaki gibi bırakırsak hata alırız çünkü biz doğrudan o array elemanını yazdırıyoruz. Ama artık biz bir array'in altında objeler gönderiyoruz friend.name dememiz gerekiyor. user.js dosyasında.
// function App() {
//   return(
//     <>
//     <User 
//     name = "Mehmet"
//     surName= "Seven"
//     isLoggedIn={true} 
//     age="29"
//     friends={friends}
//     />
//     </>
//   )
// }
 
// export default App;

//--------------------------------------------------------------------------------------------------------------------


// React Developer Tools

// İndirdiğimiz extention'ın yaptığı iş yazıcağımız componentleri hiyerarşik olarak o an nerde bulunduğunu hızlıca görüntüleyebiliyoruz. Ayrıca sahip olduğu propları görüntüleyebiliriz. O anki state'ini görüntüleyebilir veya düzenleyebiliriz. Çalışmayı tarayıcıdan açtığımızda logo kırmızı bir şekilde gözükür. Kırmızı olmasının anlamı şu anda bu çalışma geliştirme modunda dolayısıyla kırmızı bir şekilde üzerinde böcek olacak şekilde görüntüleniyor.

// React'i production ortamında kullanılan bir web sayfasına gittiğimizde örneğin twitter gibi logo mavi renk alıyor. 
// inspect deyip veya incele deyip oka tıkladığımızda yazmış olduğumuz component'lerimizi görebiliyoruz. Aynı element kısmı gibi çalışıyor fakat react'e özel componentlerimize özel bize hiyerarşik sunum gerçekleştiriyor.

// user'a bastığımızda almış olduğu propları listeliyor. State konusunu görünce state'larımızıda burada görebileceğiz.

//--------------------------------------------------------------------------------------------------------------------

// Prop Types.

// Componentlere gönderdiğimiz property'lerin tiplerini belirleyebileceğimiz bir araç var ismi prop types bunu öğreneceğiz.

//--------------------------------------------------------------------------------------------------------------------

// Prop Types: shape
// Obje olarak gönderdiğimiz propertylerde kullanabileceğimiz shape adında bir tanım daha var propetypeslar için  

// import './App.css';
// import User from './components/user'

// const friends = [
//   {
//     id: 1,
//   name: "Ahmet"
// }, 
// {
//   id: 2,
//   name: "Tayfun"
// }, 
// {
//   id: 3,
//   name: "Gökhan"
// }
// ]

// function App() {
//   return(
//     <>
//     <User 
//     name = "Mehmet"
//     surName= "Seven"
//     isLoggedIn={true} 
//     age="29"
//     friends={friends}
//     address= {{
//       title: "Ataşehir/ İstanbul",
//       zip: 34755
//     }}
//     />
//     </>
//   )
// }
 
// export default App;

// Burdaki name surName ... address proptur.

//--------------------------------------------------------------------------------------------------------------------

// Default Props

// import './App.css';
// import User from './components/user'

// const friends = [
//   {
//     id: 1,
//   name: "Ahmet"
// }, 
// {
//   id: 2,
//   name: "Tayfun"
// }, 
// {
//   id: 3,
//   name: "Gökhan"
// }
// ]

// function App() {
//   return(
//     <>
//     <User 
//     // name = "Mehmet"
//     surName= "Seven"
//     isLoggedIn={true} 
//     age="29"
//     friends={friends}
//     address= {{
//       title: "Ataşehir/ İstanbul",
//       zip: 34755
//     }}
//     />
//     </>
//   )
// }
 
// export default App;

