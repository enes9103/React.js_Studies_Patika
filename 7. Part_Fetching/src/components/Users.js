import {useEffect, useState} from 'react' // Component mount odluğu anda gidip o veri kaynağına erişmek için useEffect'i ekledik.

import axios from "axios";

function Users() {
const [users, setUsers] = useState([]);

// Veri yüklenmeye çalışırken bir loading ibaresi gösterelim aşağıda.

const [isLoading, setIsLoading] = useState(true) // component açılır açılmaz yükleme işlemi başlayacağı için true olsun.



// useEffect (() => {
//  fetch("https://jsonplaceholder.typicode.com/users")
//  .then( res => res.json())
//  .then(data => {
//     setUsers(data);
//     setIsLoading(false) // bu yüklendikten sonra yani isLoading set olduktan sonra false'a çek yani ekrandan sil demek
//     ; // Buda herhangi bir hata olursa yakala ve console'da yazdır demek.
//  })

//  .catch((e) => console.log(e))
// // .then(data => console.log(data)); // fetch ile aldığımız responsları yani cevapları logladık. Sonra console'da bir çıktı geldi o çıktı altında tanımları göremiyoruz. Bunun için respons'u json yapmamız geriyor.
//     }, []) 

// Burda axios ile yukardaki işlemlerin aynısını yapacağız.

useEffect (() => {
 axios("https://jsonplaceholder.typicode.com/users")
    .then(res => {
    setUsers(res.data); // bize response'da bir obje döner ama biz sadece data'yı istiyoruz o yüzden böyle yzdık.
    setIsLoading(false) // bu yüklendikten sonra yani isLoading set olduktan sonra false'a çek yani ekrandan sil demek
    ; // Buda herhangi bir hata olursa yakala ve console'da yazdır demek.
 })

 .catch((e) => console.log(e))
// .then(data => console.log(data)); // fetch ile aldığımız responsları yani cevapları logladık. Sonra console'da bir çıktı geldi o çıktı altında tanımları göremiyoruz. Bunun için respons'u json yapmamız geriyor.
    }, []) 

    // Yukarda useEffect ile biz bunu logda gösterebildik. Şimdi bunu ekranda göstermemiz gerekiyor ne yapmalıyız?
    // useState hook'unu kullanmalıyız.

    // Veri kaynağına erişebilmek için fetch adında bir native tanımımız var. Biz bu fetch tanımını kullanarak ek bir kütüphane kullanmadan gerekli veri kaynağına erişebiliyoruz.
    return (
        <div>
            <h1>Users</h1>

            {isLoading && <div> Loading... </div>}  {/* isLoading true ise ekranda Loading... yazsın.  */}
            
            {/* {users.map((user, i) => <div key={i}>{user.name}</div>)} */}
            {users.map((user) => <div key={user.id}>{user.name}</div>)}
            {/* Burda her child uique olmalı der ister i deriz ister doğrudan map'in bize verdiği indis numarasını gireriz */}
        </div>

    )
}

export default Users

