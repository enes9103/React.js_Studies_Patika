import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting...");
  socket = io("http://localhost:3001", { transports: ["websocket"] });

  socket.on("connect", () => console.log("Connected!"));
};

// socket = io()'da ilk parametre backend hangi porttaysa o olacak.
// option yani 2. parametreyede transports: ["websocket"] tanımını verdik.

// aşağıda backend'e mesajımızın iletilmesi işlemini yapacağız.
// Eğer socket tanımı varsa socket.emit ile mesajı backende iletiyoruz.

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("Yeni mesaj var", message);
    cb(message); // burdaki cb container.js bölümünde oluşturduğumuz cb sayesinde backendden aldığımız mesajları container.js'e ileterek diğer kullanıcılarında atılan mesajları görmesini sağlıyoruz.
  });
};

// Aşağıda uygulamayı açtığımızda önceki mesajların yüklenmesini sağladık.
export const subscribeInitialMessages = (cb) => {
  if (!socket) return;

  socket.on("message-list", (messages) => {
    console.log("Initial", messages);
    cb(messages);
  });
};
