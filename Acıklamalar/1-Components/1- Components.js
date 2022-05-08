//Components Nedir?

// Component react'in en temel yapı taşıdır.

// Yapacağımız projelerde gerçekleştireceğimiz yapı en küçük birim için birer component geliştirip daha sonra onları tek bir component altında birleştirerek görüntülicez.

// Component'i büyükleri meydana getiren küçükler olarak düşünebiliriz.

//--------------------------------------------------------------------------------------------------------------------

// Component Olusturmak

// Node modules bizim bağımlılıklarımızın kurulduğu dizin.

// src dosyası: src dosyasında app.js adında bir dosya görüyoruz aslında bu bize verilmiş olan ilk component. Biz bundan sonra yazacağımız tüm componentleri bu app componenti altında birleştirerek ilerlicez.

// Component olusturmak için gerekli şey Function keyword'ünü olusturduktan sonra component ismini yazmak ve bunu return işlemi yapmamız yeterli.

// public index html in içinde id'si root olan bir div var bu div nerede kullanılıyor.

//--------------------------------------------------------------------------------------------------------------------


// import './App.css';

// import Header from "./components/header";

// function App() {
//   return(
//     <div>
//       <Header/> 
//       <Header/> 
//       <Header/> 
      
//     </div>
//   )
// }

// export default App;

// <Header> </Header> şeklindede yazabilirdik child eklemek istesek.

//--------------------------------------------------------------------------------------------------------------------

// JSX ve Temel Kuralları

// JavaScript uzantılı bir dosyamız var ama içersinde HTML etiketi var. JavaScript dosyaları bu HTML etiketlerini nasıl yorumluyor buna bakıcaz. Bu yukarda gördüğümüz Header ve div'de aslında birer javascript ifadesi peki nasıl.

// Biz burda jsx ifadelerini kullanmak istemeseydikte react projelerimizi geliştirebilir miydik cevap evet.
// import './App.css';
// import React from 'react' // Önceki versiyonlarda react'ı her component'imize import etmemiz gerekiyordu fakat artık yeni versiyonla beraber böyle bir şeye ihtiyacımız yok.

// import Header from "./components/header";

// function App() {
// return React.createElement('div', null, 'Hello')
// // Yukardaki gibi yazınca gene ekranda gözüktü.Düşünün ki bu div'in içinde onlarca hatta yüzlerce farklı element olacak. Paragraf tagleri ul li vs. Hal böyle olunca her bir elementi olusturmak için yukardaki yapıyı kullanırsak oldukca fazla javascript kodu yazmam gerekecek dolayısıyla React'in yapıcıları JSX adında bir yaapıyı keşfetmişler ve biz bu JSX'i kullarak aslında HTML yazar gibi Javascript yazabiliyoruz. 
//   // return(
//   //   <div>
//   //     <Header/> 
//   //     <Header/> 
//   //     <Header/> 
      
//   //   </div>
//   // )
// }

// export default App;



// import './App.css';

// import Header from "./components/header";

// function App() {
//   return(
//     <>
//       <Header/> 
//       <p className = "xyz"> lorem ipsum </p>
//       <label htmlFor="myinput"> 
//         Name
//         <input id="myInput"/>
//       </label>
//     </>
//   )
// }

// export default App;

// 1- import Header from "./components/header"; Bir component olustururken mutlaka component'imizin isminin baş harfini büyük yazmaya dikkat edelim Header gibi. Sebebi ise biz bazen HTML etiketlerini render ediyoruz bazende kendi yazmış olduğumuz componentleri render ediyoruz. Baş harfi küçük olanlar HTML etiketlerinin render edilmesi olarak baş harfi büyük olanlar ise bizim yazdığımız custom componentlerin ise render edilmesi olarak algılanıyor.

// illa div kullanmak zorunda değiliz div yerine doğrudan bir etiket açıp kapatmak yeterli <> </> gibi.

// 2- Bazi özel kalıplı keywordler var if, class, for bunlar özel tanımlı keywordlerimiz. Bunları jsx yazarken kullanmamamız önemli.Javascriptte kullanacaksak class'ı class yerine className kullanalım.

// <label for="myinput"> burda bir id'yi referans gösteririrz ve bu label'a tıklandığı zaman o input'a focus olabilir.  

//for javascript için özel tanımlı bir keyword olduğu için burda for yerine htmlFor ifadesini kullanmamız önemli. 

//--------------------------------------------------------------------------------------------------------------------

// Componentlerde Değişken Render Etmek 

// Bu derste bir değişkeni veya sabiti nasıl render edebileceğimizi görmeye çalışcaz. Bu dersimize kadar hep statik ifadeler yazdık birde bir değişkenden almaya çalışalım veya sabitten.

// import './App.css';

// const name = "Mehmet"
// const surName = "Seven"

// function App() {
//   return(
//     <>
//       <h1>{`Benim adım ${name} soyadım ${surName}`}</h1>
//     </>
//   )
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------------

// Koşullu Render İşlemi

// componentlerimizde koşullu render işlemi yapabilmemiz için izlememiz gereken adımlar söyle.

import './App.css';

const name = "Mehmet"
const surName = "Seven"
const isLoggedIn = false; // Bu true olursa isloggedIn yazısı görünür false olursa görünmez.
//false olursa Giriş yapmadınız yazısı ekranda görünür.

// Onun altındada ternary operatörünü kullarak işlemi gerçekleştirdik.

function App() {
  return(
    <>
      {/* <h1>{isLoggedIn && `Benim adım ${name}, soyadım ${surName}`}</h1>
      {!isLoggedIn && "Giriş yapmadınız."} */}

<h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surName}` : "Giriş yapmadınız."}</h1>

    </>
  )
}

export default App;

//--------------------------------------------------------------------------------------------------------------------

// Bölüm Sonu Kazanımları

// Create-react-app Bir react projesine ilk adımları atabilmek için bütün geliştirme ortamı test ortamı vs hepsinin kurulu bir şekilde bize örnek bir component ile birlikte gelmesiyle ve bizim bunun üzerine çalışmamızı yapabilmemize olanak sağlayan bir yapı bunu çalıştırdığımızda bize hazır bir örnek veriliyor ve biz o örneğin üzerine devam edebiliyorduk. Ve şu an react ile yapılan örneklerin çalışmaların projelerin çok büyük bir yoğunluğu create react app ile başlıyor diyebiliriz.

// Biz react'i create-react-app olmadan kullanabiliyoruz. React'in JavaScript dosyasını aynı jquery'yi sayfamıza dahil eder gibi dahil edip yine kullanabiliiriz. Ama o zaman bizim geliştirme ortamı, test ortamı web pack ayarları gibi durumları göze almamız lazım ve bunlarla uğraşmak bazen oldukça can sıkıntısı ve zaman kaybına neden olabiliyor ayrıca burda hazır yapılmışı var ve üzerine gitmek en kolayı gibi geliyor. Eğer kendinize özel bir şey yapmak isterseniz create-react-app gibi bir repo olusturup bunun gibi çalışan bir servis oluştrup kullanabiliriz.

// Yarn start komutuyla birlikte default olarak 3000 portunda çalışmaya başlıyor. 

// Biz componentler hazırladık ve hazırladığımız componentleri app.js dosyasında kullandık. En küçük birimi bile component haline getirmek render'ın önüne geçmek için önemli bir nokta. Eğer projemizi doğru bir şekilde ayırırsak gereksiz render işleminden kurtulma olanağı sağlayabilirsiniz. 

// Component olusturmak için ihtiyacımız olan tek şey bir fonksiyon, önceleri fonksiyon componentler yokken class componentler varken bunların yazımı biraz daha karmasık olabiliyordu. Ama react'in hooks yapısıyla beraber function componentler hayatimıza girdi ve bir component olusturmak kolaylastı. Yani sadece bir fonksiyon olusturmak ve onu dısarı aktarmak yeterli oluyor.

// Daha sonra JSX konnuşmaya başladık burda HTML görünümlü yazdığımız ifadenin aslında bir javascript kodu olduğunu konuştuk, burda yazdığımız Javascript ifadesi react tarafından yorumlanıyor ve aslında birer javascript fonksiyonu haline getiriliyor. Bize ne fayda sağlıyor bir sürü etiket component vs çağırmak kullanmak istediğimizde o iç içe fonksiyonları yazmak can sıkıcı olabilir proje içinden çıkılmaz bir hale gelebilir. Belki önceki gibi fonksiyonlarla çalışıyor olsaydık react bu kadar populer olmayacaktı bu JSX'in çok büyük bir payı var bu konuda.

// Sonrasında JSX'deki kurallardan bahsettik JSX'de birden fazla component'i kullanacaksak onları render ediceksek onları bir <div></div> veya react'in bize verdiği "<></>" veya <React.Fragment> </React.Fragment> fragmment nesnesini kullanmamız gerekiyor. 

// if class for gibi özel tanımlı keywordleri gördük. O yüzden biz burda javascript kodu yzdığımız için o özel tanımlı ifadeleri kullanmamaya özen göstermemiz gerekiyordu mesela for özel tanımlı olduğu için react'de onun yerine HTMLfor tag'ini kullandık. Direk for'u kullanırsak console'da hatayı görüntüleyebiliriz.

// Sonra koşullu render olayına baktık o neydi eğer şu oluyorsa onu render et olmuyorsa bunu render et gibi koşula gidebiliyorduk. friends varsa render işlemini yap yoksa herhangi bir işlem yapma gibi.

//--------------------------------------------------------------------------------------------------------------------

// Bir component üzerinde değişken render ederken aşağıdaki yazım şekillerinden hangisi kullanılır? {variable}

// JSX yazmak, aslında ...... yazmaktır.-> javascript

// JSX yazarken tüm bileşenleri kapsayacak bir bileşen bulunmalıdır. -> Doğru

