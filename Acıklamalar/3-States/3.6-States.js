// State componentlerin üzerinde değerinin değişme potansiyeli olan bütün verileri tutan bir javascript objesidir. Component'in herhangi bir anında değeri değişme potansiyeli olan bir veri state olarak tanımlanır ve bu state değiştiği andada ilgili component render edilerek değişim ekrana yazdırılmış olur.

// terminale npx create-react-app dedikten sonra projenin ismini yazıp enter'a basıyorduk normalde eğer buraya proje ismi yerine . koyarsak direk olarak bulunduğumuz dizine ilgili projenin kurulumunu yapacaktır. Yani ek olarak bir klasör daha açmayaacak states adında bir tane dizi açtık ve onun altına bu kurulumu gerçekleştirdik. İşlem tamamlandıktan sonra bir states'i nasıl tanımlayabileceğimizi ve component'in içinde render ettiğimiz jsx'in içinde bu state elemanlarını nasıl kullanabileceğimizi öğrenmeye çalışcaz. Yüklendikten sonra yarn start diyerek projemizi çalıştırıyoruz. 


// Bölüm Sonu Kazanımları (States)

// States konusu React'de sürekli kullanılan önemli bir kavram.

// State bir componentin içinde değişme potansiyeli olan verileri tuttuğumuz yapılar. Herhangi bir state herhangi bir anda değiştiği anda ilgili component render edilir.   

import { useState } from "react";

// Bir state tanımlamamız için yapmamız gereken şey react'in altında {useState} hookunu kullanmak.

const [name, setName] = useState("Mehmet");

// Yukarda useState("Mehmet") diyerek varsayılan değeri Mehmet olarak atadık. [name, setName] state'i kullanmak için seklinde bir array açıyoruz. name burda state'in kendisi setName ise buna atama yapacak olan fonksiyonu temsil eder. Daha sonra name'i alıp div içinde herhangi istediğim yerde kullanabiliyorum. setName değiştiği anda tüm component baştan render ediliyor, ve name'in değeri değişmiş olduğu için yeni değer görüntüleniyor.

// useState kullanırken sadece state değil her türlü veri türünü kullanabiliyoruz Number, array, obje vs gibi.

{
            friends.map((friend, index) => (
            <div key={index}>{friend}</div> 
            ))} 

// arrayi listelemek istediğimizde map methodunu kullanmamız gerekiyor. Eleman eklemek veya çıkarmak için setFriends, setName vs kullanıyoruz.

<button onClick={(() => setFriends([...friends, "Ayşe" ]))} >Add new friend</button>

//...friends önceki değerleri koru anlamına gelir. üzerine de "Ayşe" diyerek "Ayşe" string'ini ekle diyoruz. 

// Yeni bir değer ataması yapacağımda set... yazdıktan sonra ilk bakmam gereken şey tanımlanan verinün türü ona baktıktan sonra ona göre değer ataması yapmam gerekiyor.


{ <input value={name} onChange = {(event) => setName(event.target.value)}/> }

// Bir input tanımladığımızda ona onchange ve value tanımlarını vermeyi unutmamız gerekiyor.



// Bir state tanımı yapmak için kullanılan hook hangisidir? -> useState

// JavaScript üzerinde kullanılabilen her veri türü ile state tanımı yapılabilir. -> Doğru