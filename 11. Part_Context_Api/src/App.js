// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

// Bu bölümde state yönetimi yapabilmemiz için kullanabileceğimiz context api'yi inceleyeceğiz. Biz bir state oluşturduğumuzda ilgili state hep o componentin içinde kalıyordu veya bu datayı benim bir alt componente göndermem gerekiyordu o alt componentin altındaki compenentte kullanmam gerekiyorsa onun da altına tek tek vermem gerekiyordu.

// Birbiriyle bağlantısı olmayan 2 component arasındaki state'leri birbiri içinde kullanmak istersek ne yapacağız gibi sorunlar var. Bunlardan kurtulmak için React altında context adında bir kütüphane geliyor, onu kullanıyoruz. Bu context'i kullanarak o an elimizde hangi data varsa bunu sağlıyoruz provide ediyoruz, o context'in altında kullanılmış tüm componentlere ve content'in içindeki dataya ben herhangi bir anda herhangi bir componentin içinden erişip manipüle edebiliyorum.

// Context Oluşturmak
// Oluşturcağımız context'in amacı light mode ve dark mode şeklinde bir temamız olacak light ve dark şeklinde bunun değerini tutan bir tane context olacak ve bunu altında render edilmiş tüm componentlerden erişip değiştirebilmek istiyorum sağladığı datayı.

// import "./App.css";
// import ThemeContext from "./context/ThemeContext";
// import Button from "./components/Button";

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Button /> {/* Button componentinden dark verisine nasıl erişeceğim.  */}
//     </ThemeContext.Provider>
//     // Burada child olarak bulunan yani render edilen tüm componentlere provide edilen sağlanan tüm dataları gönderebilmemiz gerekiyor. Onun içinde hangi datayı sağlayacağımızı value ile  belirtiyoruz.
//   );
// }

// export default App;
//-------------------------------------------------------------------------------------------------------------------------------------

// // Context Provider

// import "./App.css";
// import Button from "./components/Button";
// import { ThemeProvider } from "./context/ThemeContext";
// import Header from "./components/Header";

// function App() {
//   return (
//     <ThemeProvider>
//       <Header />
//       <hr />
//       <Button />
//     </ThemeProvider>
//   );
// }

// export default App;

// // Yukardaki provider'ı daha yönetilebilir daha temiz bir hale getirmek için ve app componentini biraz daha temiz bırakmak için bu provider'ı context'imiz üzerinde tanımlayabiliriz.
// // Yukarıda ThemeProvider'ın içine yazacağımız ifade children'dir.
// // Böyle yaparsak fark ilgili context ile alakalı yapacağımız her şeyi o context dosyasının içersinde barındırmış oluyoruz bu app dosyamızı karmaşık hale getirmiş olmuyoruz. Şu an bir tane context var o yüzden o kadar karmaşık görünmüyor. Belki ilerde onlarca context kullanacağız. Öyle durumlarda oldukça karmaşık görünüme sebeb olabiliriz.
//-------------------------------------------------------------------------------------------------------------------------------------

// Theme Switcher Yapımı

// Bu işlemi en dıştaki div'imiz üzerinden götüreceğimiz için yani dark olduğunda farklı bir classname light olduğunda farklı bir classname'i vermek isticez fakat bunu app.js dosyasında yapamam. Çünkü app.js dosyasında bu provider kullanılmaya başlanıyor. Eğer bu App.js componentini sarmalayan bir yapı yoksa kullanamayız.
Dolayısıyla container adında bir tane daha component oluşturabiliriz.

import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

// <ThemeProvider>
//     <UserProvider>
//       <Container />
//     </UserProvider>
//   </ThemeProvider>

// Yukardaki gibi yazdığımızda UserProvider yani user context'i ThemeContext'deki datayı kullanabilir durumda oluyor.
// Birden fazla contex kullanma işi bu şekilde tek yapmamız gereken kaç tane context kullanmak istiyorsak onları import edip burda yazmamız yeterli.
