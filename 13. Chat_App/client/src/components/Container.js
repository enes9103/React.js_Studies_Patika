import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useEffect } from "react";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => {
      setMessages(messages);
    });

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    });
  }, []);

  // subscribeChat fonksiyonunda amacımız attığıımız mesajları diğer kullanıcılarında görebiliyor olması o yüzden burda parametre olarak geçtiğimiz callback tanımını socket api'de kullanacağız. callback'i ekleyip parametre olarak message'ı geçiyoruz.
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;

// Bütün işlemleri (socket.io) vs bu conteynar altında devam edecek. Onun altında da diğer componentleri göstereceğiz.
// Container'in içinde mesajlarımızın listesi ve onun altında bir form olacak.
