// import {hello, topla, cıkar} from "./my-module.js";
import hello, {topla, cıkar, text, user, users} from "./my-module.js"; 
// my-module.js dosyasında default olarak girilen hello obj için bu şekilde yazıldı. Diğer türlü undefined döner. 

// Bu sayfada import kısmında yazdoğımız hello illa my-module.js dosyasında yazdığımız key ile aynı olmak zorunda değil. Çünkü bu zaten default olarak dışa aktarılıyor. Ve default olarak dışa aktarılcak tek bir tanım olabilir. O yüzden hello yerine selam'da yazabiliriz. Tabi çalıştırırkende selam yazmayı unutma altta


console.log(topla(2,4))
hello("Mehmet")
console.log(cıkar(4,2))
console.log(text)
console.log(user)
console.log(users)