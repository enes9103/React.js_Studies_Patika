// Bu bölümde anlatılanlar react bölümünde en çok ihtiyacımız olacak olan tanımlar, terimler, keyword'lerdi. 

// React tarafında JavaScript temellerine sahip olmak oldukça önemli.

// {
//     "name": "learning-node",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "type": "module",
//     "scripts": {
//       "start": "node index"
//     },
//     "author": "oguzhnduran@gmail.com",
//     "license": "ISC",
//     "dependencies": {
//       "axios": "^0.24.0",
//       "node-fetch": "^3.1.0",
//       "slugify": "^1.6.2"
//     }
//   }


// Giriş bölümünde bir node.js projesi nasıl oluşturulur bir modül nasıl indirilir nasıl kullanılır  konuları konuşmaya çalıştık bizim package.json adında bir dosyamız vardı bu dosya altında aslında yaptığımız proje ile alakalı birçok tanımı config'i tutuyoruz. Ordaki en önemli kısım bağımlılıklar kısmı biz herhangi bir module kurduğumuz anda o modul en alta eklenir, ve daha sonra node_modules dosyasını kaybettiğimizde veya sildiğimizde tek bir komutla en alttaki bağımlılıkları tekrar kurabiliyoruz. Onun dışında script adında bir bölüm daha var. Burda yaptığımız şey ise biz node komutunu çalıştıracağımız zaman normalde terminalde node index komutunu çalıştırırken bunun daha uzun olabileceğini farz ettiğimizde terminalde her defasında o komutu girmek hatırlamak zor olabilir diye bunları birer script'e atıyorduk ve o şekilde kullanmaya çalışıyorduk npm start diyerek.

// Sonrasında slugify isminde bir tane modülümüz vardı o modülü internetten npm.js üzerinden indirdik ve kullanmaya çalıştık dışardaki bir modulü nasıl indirebilirim nasıl kullanabilirim onu öğrenmiştik 

// 1-My-Module

//Sonrasında ise kendi modülümüzü yazmayı denedik


//İmport gibi keywordleri kullanmak için neye ihtiyacımız olduğunu söyledik 

//sonrasında mymodule.js isminde bir module yazdık ve sonrasında bunları dışa aktardık. ---> 
// import hello, {topla, cıkar, text, user, users} from "./my-module.js";  şeklinde.
// Niye dışa aktardık? Çünkü index.js dosyasında kullanabilmek amacıyla bu bir modülse başka bir yerde import edilip kulllanilabilmeli.

// Sonrasında default "varsayılan" olarak bir javascript verisi nasıl dışarı aktarılır onu konuştuk.

// bunu export default ile yapıyoruz

export default name => {
    // console.log("Hello " + name)
    console.log(`Hello ${name}`)
} // Tek bir parametre varsa paranteze ihtiyaç yok.

//export default kullanarak parantezlerin içine yazmadan dışarda doğrudan alabiliyorduk. Javascript'in değişken tanımlama kurallarına uyarak aşağıdaki hello gibi herhangi bir isimde yazabiliriz. Normal şekilde dışa aktardıklarımızı da süslü parantez içinde alabiliyorduk topla, cıkar vs.

// import hello, {topla, cıkar, text, user, users} from "./my-module.js"; 

// 2- CallBack

// node fetch kütüphanesini kullanarak herhangi bir veri kaynağına bağlanıp onun içeriğini alıp ekranda göstermeye çalıştık, ordaki işlemleri sıraya koymayı konuşmustuk daha cok.

// fetch yapısı çok karmaşık olduğu için daha basit hale getirebilmek adına async await yapısını öğrendik. async await yapısında async fonksiyonunda await yapısını kullanıyorduk asengron işlemlerimizi sıraya koyabilmek adına.

//async'de get data gibi isimlendirilmiş bir fonksiyon kullanmak istemiyorsam bunu anonim olarak nasıl yazarım diye konuştuk. Burda axios karşımıza çıktı onun note fetch'e göre avantanjlarından bahsettik. Mesela fetch'de 2 defa  await yazmak durumunda kaldık json() parse işlemi olduğu için o yüzden de axios'u kullanalım hemde bu json() işlemini yapmayalım ve bizim kodumuz syntax olarak temiz olmaya çalışssın. 

// 3- Promise

// Sonra promise yapısına geçtik herhangi bir fonksiyonda promise return ettiğimizde resolve ve reject adında o fonksiyonun içersinde herhangi bir işlem yappıktan sonra bir veriyi resolve edebilirsiniz veya hataya düşüyorsa eğer onu reject edebiliyorduk 