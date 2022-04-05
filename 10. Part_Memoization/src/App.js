// React.memo

// Bu bölümde react componentlerimizdeki gereksiz renderların önüne geçerek componentleri daha performanslı hale getirmek için uygulayabileceğimiz bazı memorizing yöntemlerini öğrenmeye çalışcaz.
// Önce bunlardan ilki olan react-memo ile başlayalım.

// import './App.css';
// import { useState } from "react"
// import  Header  from "./components/Header"

// function App() {
//   const [ number, setNumber ] = useState(0);
//   return (
    
//     <div className="App">
//       <Header number={number < 5 ? 0 : number}/>

//       <hr />
//        <h1>{number}</h1>
//        <button onClick={() => setNumber( number + 1)}>Click</button>
//     </div>
//   );
// }

// export default App;
// Biz yukarda numberı butona bassınca arttırıyoruz, yani number'ın değeri değişmiş oluyor, bu number'ın değeri değiştiği anda state değiştiği için return edilen kısım tekrar render ediliyor ve bu return'ün içinde header'da olduğu için Header kısmıda baştan render ediliyor. Bu bizim için bir problem, bu react componentimizde gereksiz render anlamına geliyor. Onun için bu gibi durumların önüne geçmek için export ederken React.memo() ile sarmalayıp aktarırsak artık öyle bir problem yaşamayacağız.

//-------------------------------------------------------------------------------------------------------------------
// // useMemo

// import './App.css';
// import { useState, useMemo } from "react"
// import  Header  from "./components/Header"

// // const data = { name: "Mehmet", } //  Olusturduğumuz data'yı componentin dışında bir yerde yazdık.

// function App() {
//   const [ number, setNumber ] = useState(0);
//   const [text, setText] = useState("");
 

//   // const data = { name: "Mehmet", } // eğer data'yı componentin dışında kullanamıyorsak useMemo hook'unu kullanmamız gerekiyor.

//   // const data = useMemo(() => {
//   //   return [{ name: "Mehmet", number}];
//   // }, [number]) // Peki ne zaman bu data hesaplanacak? dependency array'de belirtmiş olduğumuz datalar değiştiği anda hesaplanacak. Örneğin number'ı eklersek number her değiştiğinde burası baştan hesaplanmış olacak.

//   // useMemo'yu arrayler içinde kullanabiliriz, yukarda ki gibi.

//   // Bu durum belki şu anda çok fazla önemsenicek bir konu değil. Fakat bizim bir fonksiyonumuz olsaydı ve [{ name: "Mehmet", number}] objeyi bize veriyor olsaydı

//   const data = useMemo(() => {
//     return calculateObject(number);
//   }, [ number]); 

//   // Normalde ben useMemo'yu kullanmasam direk aşağıdaki gibi const data = ... şeklinde yapsam text state' değiştiği için state değişikliği nedeniyle calculateObject fonksiyonu baştan baştan hesaplanıyor. Ama yukardaki gibi useMemo'yu kullanırsam böyle bir hesaplama yapılmayacak, sadece dependency array'in içine ilgili değişkeni değiştiği anda yapılacak örneğin number.

//   // Yani biz useMemo ile dependency array'in içine number yazarak number değiştiği anda calculateObject fonksiyonunu çalıştır dedik. İnputa değer girince herhangi bir problem olmuyor

//   // const data = calculateObject(); 

  
  
//   return (
    
//     <div className="App">
//       <Header data={data} />

//       <hr />
//        <h1>{number}</h1>
//        <button onClick={() => setNumber( number + 1)}>Click</button>

//        <br /> <br />
//        <input value={text} onChange={({target}) => setText(target.value)} />
//        {/* Burda inputa her girdide tekrar yüklenir ve inputta bir yavaşlama oluyor */}
//     </div>
//   );

//   function calculateObject(number){
//     // Burda hesaplaması zor tonlarca veriyle çlıştıracak bir işlem yaptırmış olsaydım, bir gecikme olacaktı aşağıdaki for döngüsünde calculating ve calculating completed'da olduğu gibi.
//     console.log("Calculating...");
//     for (let i = 0; i < 100000000; i++) {}
//     console.log("Calculating Completed!");
//     return { name: "Mehmet", number}
//   }
// }

// export default App;
//-------------------------------------------------------------------------------------------------------------------
// useCallback   

// Butonu Header'a taşıyıp arttıtma işlemini orda yapmaya çalışcaz.

import './App.css';
import { useState, useMemo, useCallback } from "react"
import  Header  from "./components/Header"

// const data = { name: "Mehmet", } //  Olusturduğumuz data'yı componentin dışında bir yerde yazdık.

function App() {
  const [ number, setNumber ] = useState(0);
  const [text, setText] = useState("");  

  const increment = useCallback(() => {
    setNumber( (prevState) => prevState + 1)
  }, []) 
  // Ben yukarda dependency array'e number vermediğim sürece sadece number 0 + 1 olarak devam edecek yani 1 olup kalacak number yazmadığımızda dependency'e Header'a hep setNumber'ı 1 yapacak bir fonksiyon iletilmiş oluyor. Ama ben dependency bölümüne number yazdığımda her seferinde setNumber fonksiyonu baştan hesaplanacağı için problem olmayacak. Ama header gene her seferinde render edilecek bunun sebebide biz her defasında number'ı baştan tanımla dediğimiz için yine baştan tanımlıyor dolayısıyla header componentinde farklı bir prop varmıs gibi algılanp baştan render ediliyo. O yüzden bizim dependency'deki numberdan kurtulmamamız gerekiyor. onu da atama işlemi yaparken önceki state'i al diyorduk yani önceki state'i al 1 ekle dicez.

  // prev'i kullanınca artış işlemi gerçekleşmesine rağmen yukarsı tekrar tekrar render olmuyor.

  // Bir fonksiyonumuz varsa onu herhangi bir alt componente geçiyorsak, ve o alt componentte tekrar tekrar render olmasını istemiyorsak bu durumlardan kurtulmak için fonksiyonlar özelinde useCallback'i kullanabiliriz.
    
  return (
    
    <div className="App">
      <Header increment={increment} />

      <hr />
       <h1>{number}</h1>
       

       <br /> <br />
       <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

export default App;

// number değeri her arttığında app.js render oluyor, render olduğu için header'ın increament prop'unun içindeki fonksiyonda baştan hesaplanıyor. Baştan hesaplandığı için de header componentinin içinde react memo olmasına rağmen sanki yeni bir prop varmış gibi algılanıp Header sayfası tekrar tekrar render ediliyor. Bizim yapmamız gereken ise increment prop'unun içindeki fonksiyonun aynı olduğunu söylemek. Bunu yapmak içinde karşımıza useCallback adında bir tanım çıkıyor. Bu hook ile bir fonksiyon dönüyoruz,  ve o kullandığımız fonksiyonu memorize etmiş oluyoruz. Nereye kadar? Dependency array'de verdiğimiz datalar değişene kadar o fonksiyon aynı kalıyor.

