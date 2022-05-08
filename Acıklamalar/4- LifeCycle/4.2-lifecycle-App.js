// import {useState, useEffect} from 'react'

// function App() {
//   const [number, setNumber] = useState(0);
//   const [name, setName] = useState("Mehmet");

  
//   // useEffect (() => {
//   //   console.log("number veya name state güncellendi")
//   // }, [number, name])
//   // Yukardaki ifade her türlü güncellemede çalışır peki ben sadece Number güncellendiğinde çalıştırmak istiyorsam ne yapmam gerek. O zamanda depency array'inin içine ilgili ismi yazmalıyız yani number ise number güncellendiğinde bildirilmesi gereken veriyi girmeliyiz.

//   // Bu array'in içine istediğimiz kadar state elemanını ekleyebiliriz

//   useEffect (() => {
//     console.log("name state güncellendi")
//   }, [name])

//   useEffect (() => {
//     console.log("number state güncellendi")
//   }, [number])

//   useEffect (() => {
//     console.log("Component mount edildi!")
//   }, [])

//   // Yukardaki [] dependency array olarak geçiyor teknik olarak boş bırakırsak component mount edildiği anı yakalarsın demek oluyor.
//   return (
//     <div className="App">
//     <h1>{number}</h1>
//     <button onClick={() => setNumber(number + 1)}>Click</button>

//     <hr />

//     <h1>{name}</h1>
//     <button onClick={() => setName("Mete")}>Click</button>

//     </div>


//   );
// }

// export default App;

// Ben bir butona bastığım anda name'i değiştirebilirim. Bu state güncellenir, dolayısıyla component render edilir. Ben componentin render edilme durumunu veya herhangi state'in güncellenmesi durumunu nasıl yakalayailirim, bu event'i nasıl yakalayabilirim.

// useEffect hook'unu kullanarak yaşam döngüsündeki eventleri yakalayabiliriz. Açar açmaz console'da state güncellendi yazmasının nedeni bizim bir tane state'imiz var ve ona varsayılan değer ataması yapıyoruz. Dolayısıyla console'da yazıyı görüyoruz.

// Butona her bastığımızda sayı artıyor ve state güncellendi yazısı consolda görünüyor. Yani ben useEffect ifadesiyle güncellemeleri yakalayabiliyorum.

// React'in daha önceki versiyonunda class componentler kullanıyorduk.  Orda componentdidmount adında özel tanımlı bir fonksiyonuz vardı. O component mount olduğu anda o fonksiyonu yakalayabilmemizi sağlayan bir fonksiyon.

// useEffect useState gibi fonksiyonları kullanırken bu fonksiyonlar hiçbir şekilde bir if yapısının içersinde olmamalı. Component'in tepesinde bulunmalı ve herhangi bir controle tabi olmamalı.

//--------------------------------------------------------------------------------------------------------------------

// Component Unmount

// Component mount edildiği anda number'ın değeri otomatik olarak artsın. Sonra bir tane daha buton olsun elimizde ona basıldğında da componenti tamamen kaldırsın yok etsin unmount etsin.
import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [isVisible, setIsVisible] = useState( true)
  return <div className="App">
    {isVisible && <Counter/>}

    <br />

<button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button> 

  </div>
} // setIsVisible(!isVisible) bu true ise false false ise true yap demek.

export default App;


//------------------------------------------------------------------------------------------------------------------

import React from 'react'

function List( { ToDoApp } ) {
    return (
        <div>
           <ul>
               {
                ToDoApp.map((tasks, i) => ( 
                <li key={i}>{tasks.task}</li>
                ))}
           </ul>
        </div>
    )
}

export default List

// Eklemiş olduğumuz kayıtları bu componentte göstericez.

// List( { ToDoApp } ) ile ToDoApp'den gönderdiğimiz prop'umuzu aldık.

// Her defasında bir kayıt geliyor ve biz bu kayıtları her defasında bir li içersinde gösteriyoruz.

// Her mapleme işleminde indis ve key'i unutma. Listeleme elemanının en dışındaki etikete vermememiz gerekiyor.