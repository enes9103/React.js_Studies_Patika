// import { createContext, useState } from "react"; // bununla context'imizi oluşturabiliriz.

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   const values = {
//     theme,
//     setTheme,
//   };
//   return (
//     <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
//   );
// };

// export default ThemeContext;

// // ThemeContext'e children'ı aldım ve provider'ın children'o themeContext.Provider'ın içinde gösterdim. Daha önce app.js'deki hali de aynıydı aslında ThemeContext.provider vardı ve içinde componentler vardı. Şimdi ise burada ThemeProvider diye bir şey tanımladık bunu dışa aktardık.

// // Biz yukardaki ThemeProvider'ı app.js dosyamıza import edip içini doldurursak aslında aynı şey oluyor yani app.js'de ThemeProvider'ın içine yazacağımız ifade yani mesela <Button /> chİldren olmuş oluyor. Yani oraya yazdığımız hangi component varsa o children syesinde provider içine gelmiş oluyor. Fark ne oldu? fark ilgili context ile yapacağımız her şeyi yukarda olduğu gibi o context dosyası içinde barındırmış olduk. Bir daha app.js dosyamızı karmaşık hale getirmek zorunda kalmıyoruz. Şu an bir tane context olduğu için karmaşık görünmüyor ama belki onlarca context kullanacağız öyle durumlarda oldukça karmaşık görünüme sebeb verebilirsiniz. O yüzden düzenli gitmek daha mantıklı olan. Eğer bu yapılardan birini kullanmazsak ilerleyen zamanlarda kodumuz ölçeklendirilemiyor ve her yaptığımız şey başka bir şeyi bozar hale geliyor. O yüzden sistemi en baştan kurarken doğru tercihler yaparak ilerlemek en önemli olan şey.

// //-------------------------------------------------------------------------------------------------------------------------------------

// // Context Provider Side Effects
// // Sayfayı yenilediğimiz zaman varsayılan neyse o theme gene karşımıza çıkıyor, bu durumu önlemek için localstorage'a kaydedebiliriz en son temayı. Burda yazdığımız şey aslında bir react componenti o yüzden herhangi bir react componentinde ne yapabiliyorsak burdada aynılarını yapabiliriz. Mesela useEffect'i kullanabiliriz.

// import { createContext, useState, useEffect } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // local storage'a kaydettiğimiz temayı burda varsayılan olarak veriyoruz. "theme" datası neyse onu local storage'dan alıyoruz. || "light" diyerek local storage'da herhangi kayıtlı bir değer yoksa varsayılan olarak light al dedik.

//   useEffect(() => {
//     localStorage.setItem("theme", theme); // key value unutma! Bu şekilde mevcut temayı local storage'a kaydettik.
//   }, [theme]); // tema her değiştiğinde bana söyle dedik. Bunu loglayarak tema her değiştiğinde bilgiyi alıp almadığımızı kontrol ettik.

//   const values = {
//     theme,
//     setTheme,
//   };
//   return (
//     <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
//   );
// };

// export default ThemeContext;

// // Burda yazdığımız ThemeProvider'da aslında bir react componenti ismine aldanmayın. Dolayısıyla bir react componentinde ne yapabiliyorsak burda da yapabiliriz.

//-------------------------------------------------------------------------------------------------------------------------------------

// Multi Context

// Uygulamalarımızda elbette birden fazla context'i barındırabiliriz. Tek bir context yaratıp tüm verimizi bunun altından akıtmak zorunda değiliz, böyle bir şey zaten mühendislik açısından sıkıntılı. Dolayısıyla birbiriyle alakasız olan tüm verileri birbirinden ayırmak, birbiriyle alakalı olan tüm verileride tek bir çatı altında toplamak en iyisi bu durumda.

// Tema ile ilgili yapacağımız işlemleri tema context'i altında tutarken, giriş yapmış kullanıcı ile alakalı bilgileride userContext gibi bir yerde tutabiliriz.

//-------------------------------------------------------------------------------------------------------------------------------------

// Custom Context Hook

// Biz her defasında bir componentte bir context'i kullanacağımız zaman örneğin ThemeContext'ini kullanacağımız zaman önce context'in kendisini import ediyoruz sonra react'in altından useContext'i alıp useContext'in içinde kullanmak istediğimiz context'i kullanıyoruz.
// Bunu her defa yapmak insanı yorabiliyor, bunu güzelleştirme şansımız var.

//-------------------------------------------------------------------------------------------------------------------------------------

// Context Provider Side Effects
// Sayfayı yenilediğimiz zaman varsayılan neyse o theme gene karşımıza çıkıyor, bu durumu önlemek için localstorage'a kaydedebiliriz en son temayı. Burda yazdığımız şey aslında bir react componenti o yüzden herhangi bir react componentinde ne yapabiliyorsak burdada aynılarını yapabiliriz. Mesela useEffect'i kullanabiliriz.

import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Burda localstorage'da bir tema varsa onu getir yoksa varsayılan olarak light getir dedik.

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext); // normalde componentte yaptığımız işlemi burda yaptık. Yani burda useTheme adında bir hook oluşturduk ve onu diğer componentlerde kullanacağız.

export { useTheme, ThemeProvider };

// Biz burda ThemeContext'i dışa aktarıp sonrada ilgili componentte içe aktarıyoruz, sonra da React'in altında useContext alıyoruz işte aynı işi burda da yapabiliriz.
