import "./App.css";
import Palatte from "./components/Palatte";
import { init, subscribe } from "./socketApi";
import { useEffect, useState } from "react";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);

  // didmount anında init fonksiyonu çalıştırdık.
  // subscribe fonksiyonunu burada çalıştırarak abonelik işlemlerini başlattık.

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palatte activeColor={activeColor} />
    </div>
    // Yukarda Palatte.js'de oluşturup backende gönderdiğimiz rengi backendden alarak background olarak Palatte componentine geçtik.
    // Yani palette componentinin açık olduğu tüm sayfalarda background rengi aynı oldu.
  );
}

export default App;

// Sayfayı yenileyince backend tarafında ayrılıp tekrar bağlanıldı şeklinde gözükür.
