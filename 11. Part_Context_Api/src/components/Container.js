// Theme Switcher Yapımı

// import { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import React from "react";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";
import { useTheme } from "../context/ThemeContext";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      {/* Yukarda theme'den kasıt ThemeContext'den gelen varsayılan theme'dir. yani theme dark ise app dark değilse app classıgelecek. Burda direk ${theme}'de yazabiliriz app light tanımlı olmadığında varsayılan geleceği için.*/}
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;

// Burda ThemeProvider'dan gelen datayı kullanabilir durumda olacağız.
// Bir context'i kullanabilmek için öncelikle useContext hook'unu import ediyoruz.
// Sonra hangi context'i kullanacaksak onu alıyoruz, burda ThemeContext'i kullanacağımız için onu import ettik.
// Sonra içerde theme'i oluşturuyoruz setTheme yani buna atama yapacak fonksiyonu almama gerek yok zaten bunu kullanmayacağız.

// Özet olarak şu anlık context api'yi kullandığımız zaman herhangi bir state'i herhangi başka bir componentte kullanmak için iç içe alt alta tekrar tekrar gönderip kullanmamıza gerek yok context denen bir yapı var bu yapı sayesinde bu işlemi çok basit bir şekilde yapabiliyoruz.
