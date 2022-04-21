import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor...");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () =>
    console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
  );
};

// Burda io'ya doğrudan bir endpoint ("http://localhost:3001")vererek oraya ilgili bağlantı işlemini gerekleştirecek. Bizim backendimiz şu an 3001 portunda koşuyor ve biz 3001 portu ile bağlantı kurmak istiyoruz.
// socket'de options parametresi var ve bu parametre transports ile ifade ediliyor ve biz bunu websocket olarak belirledik.
// Bağlantı işlemi gerçekleştikten sonra socket.on ile bunu dinliyoruz.
// Yazmış olduğumuz bu fonksiyonu app.js dosyamızda kullanmaya çalışacağız.

// Backende mesaj göndermek için gerekli fonksiyonu aşağıda yazıyoruz. Bu fonksiyon rengi input olarak alıp backende iletiyor.
// socket.emit() methodu client'da isek backend'e backend'de ise client'a veri göndermeyi sağlıyor. 2 parametre alıyor 1. datayı hangi kanala göndereceğimiz 2. datanın ne olduğu.
// Biz hangi kanala yollayacağımızı öğrenmek için backende dosyamıza baktık ve "newColor" ile karşıladığımızı gördük o yüzden bizim bunu oraya göndermemiz gerekiyor.

export const send = (color) => {
  socket.emit("newColor", color);
};

// Aşağıda receive kanalına abone olacağız ve herhangi bir client veri gönderdiği anda bunu alıp kullanmaya çalışalım.
// Burada bizim socket'i dinlemeye ihtiyacımız var ve bunu receive kanalı ile dinleyeceğiz. Çünkü backendimizde bu isimle emit işlemi yapılıyor. Yani biz bir yerden gelen veriyi almak için socket.on() veriyi iletmek için socket.emit() methodlarını kullanıyoruz diyebiliriz. Bunu kullanmak için önce app.js dosyamızda çalıştırdık.

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};

// Yukarda her data geldiğinde biz cb fonksiyonunu çalıştırdık. App.js sayfasında da setActiveColor(color) diyerek aldığımız datayı active color'a atadık.
