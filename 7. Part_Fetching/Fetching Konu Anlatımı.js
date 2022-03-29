// Bu bölümde herhangi bir veri kaynağına gidip ilgili veriyi aldıktan sonra ekranımızda nasıl gösteririz bu işlemlere bakcaz.

// jsonplaceholder.typeicode.com'da fake bir API var. Ve orada users endpoint'ine tıklayıp oradaki json dosyasına ulaşabiliyoruz. Ve orada dönen json dosyasını ekranımzda göstermeye çalışalım.

// API Nedir?

// API, iki uygulamanın birbiriyle konuşmasına olanak tanıyan bir yazılım aracısı olan Uygulama Programlama Arayüzü’nün kısaltmasıdır. WhatsApp gibi bir uygulamayı her kullandığınızda, her anlık mesaj gönderdiğinizde veya telefonunuzda hava durumunu her kontrol ettiğinizde bir API kullanıyorsunuz.

// API Nasıl Çalışır?

// Örneğin, cep telefonunuzdaki bir uygulamayı kullandığınızda, uygulama internete bağlanır ve verileri bir sunucuya gönderir. Ardından sunucu bu verileri alır, yorumlar, gerekli eylemleri gerçekleştirir ve telefonunuza geri gönderir. Sonrasında uygulama bu verileri yorumlar ve istediğiniz bilgiyi okunabilir bir şekilde size sunar. İşte API budur. Bunların hepsi API aracılığıyla olur.

// Bunu daha iyi açıklamak için günlük hayattan bir benzetme yapalım:
// Sipariş verebileceğiniz bir menüyle bir restorandaki bir masada oturduğunuzu düşünün. Mutfak, siparişinizi hazırlayacak “sistem”in bir parçasıdır. Eksik olan şey, siparişinizi mutfağa iletecek ve yiyeceğinizi masanıza geri teslim edecek kritik bir bağlantıdır. İşte garson ya da API burada resme dahil olur. Garson - veya API - siparişinizi alan ve mutfağa - sisteme - ne yapacağını söyleyen aracıdır. Ardından garson cevabı size geri iletir; bu örnekte cevap, yiyecek ve içecekleriniz oluyor.

// JSON nedir?

// JSON (JavaScript Object Notation – JavaScript Nesne Notasyonu) insanlar için okunabilir olan bilgi saklama ve alışveriş formatıdır. Bir JSON dosyası sadece metin kapsar ve .json uzantısını kullanır.

// JSON yapılı veri depolayan ve genellikle bir sunucu ve istemci arasında veri alışverişi için kullanılan bir formattır.

// Benim Users componentim mount edildiği anda ben o veriye erişmek için gerekli olan isteği başlatmak istiyorum. Artık o istek ne zaman sonuçlanırsa ekranımda göstermiş olacağız.

// import {useEffect} from 'react' // Component mount odluğu anda gidip o veri kaynağına erişmek için useEffect'i ekledik.

// useEffect (() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then( res => console.log(res)); // fetch ile aldığımız responsları yani cevapları logladık. Sonra console'da bir çıktı geldi o çıktı altında tanımları göremiyoruz. Bunun için respons'u json yapmamız geriyor.
//        }, [])


// ------------------------------------------------------------------------------------------------------------------

// Axios

// Native fetch ile yaptığımız tüm işlemleri aslında farklı kütüphanelerde kurarak yapabiliyoruz. Bunlardan en çok bilineni axios. Aralarında inanılmaz büyük farklar yok. 

// En önemli farklar fetch'i kullandığımız zaman bize body'yi json olarak vermiyor stringify olarak veriyor dolayısıyla bizim bunu json'a elle çevirmemiz gerekiyor ama axios'da öyle bir şey yok doğrudan bize body'i obje olarak dönüyor.

// Axios'u kullandığımızda herhangi bir isteği iptal edebiliriz veya timeout belirleyebiliriz fetch'de bu durum söz konusu değil.

// Axios'un daha geniş bir browser desteği var fetch'de ise bu sınırlı.

// Axios'ı kullanabilmek için bunu bir modül olarak kurmamız gerekiyor.

// yarn add axios ile kurulumu gerçekleştiriyoruz sonra onu import etmemiz gerekiyor. import axios from "axios" şeklinde ilgili sayfamıza. 


// Aşağıdakilerden hangisi ile ek modül kurmadan web servis çağrımı yapılabilir? -> fetch

// Axios ile servis çağrımı yaptığımızdan JSON parse işlemi yapmamıza gerek yoktur. -> Doğru