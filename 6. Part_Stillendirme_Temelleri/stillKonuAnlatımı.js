// Still Tanımı Yapmak

// İlk stillendirme dosyasını oluşturduğumuzda bize App.css ve index.css dosyasını veriyor

// Normal html yazarken etiketlerde style diye bir property var buraya biz inline olarak bir stil tanımı kullanabiliyoruz 

// <div style="color: "red"> React kullanırken bu şekilde bir still tanımı veremeyiz.

// <div style={{color: "red"}}>  React'de inline style için süslü parantez kullanmamız gerekiyor. Obje olarak bu still'i tanımlarımızı vermemiz lazım. Yani süslü parantezi açtıktan sonra obje olarak bu still tanımlarımızı vermeliyiz.

// Tüm CSS stillerini react kullanırken bu şekilde verebiliriz ama tek farkla.  Mesela CSS'de background-color diye verilen bir still React'de o şekilde verilmiyor. Çünkü javascript'de bir değişken oluştururken veya bir objenin içinde key tanımı yaparken - ifadesi kullanamayız. 

// Bu yüzden bu tanımı camel case ile vermemiz gerekiyor yani. background-color yerine backgroundColor gibi.
// <div style={{color: "red", backgroundColor: "blue", paddingTop: 50 }}> gibi. 

// Burda dikkat etmemiz gereken ilk şey 1 obje verdiğimize emin olmamız gerekiyor. İkincisi CSS tanımlarının içinde - vs gibi tanımlar varsa onlar yerine camel case kullanmalıyız.

// Çok inline olarak CSS tanımları verilmiyor ama verdiğimiz zamanda dikkat etmemiz gerekecek.

//-------------------------------------------------------------------------------------------------------------------

// Bir diğer konu normalde Bootstrap'i kullanıcaz diyelim. Bunu yaparken napıyoruz Bootstrap bize bir CSS dosyası bir de Javascript dosyası veriyor bunu HTML dosyamıza import edip kullanmaya başlayabiliyoruz. Bu şekilde dışardaki bir endPoint'deki bir CSS dosyasını alıp import edebilir miyim diyede sorabiliriz. Onu yapmak için de cdnjs'e gidicez. Ordan bootstrap yazım en üstteki kısma tıklıcaz. Ordanda bootstrap.min.css ile biten linki kopyalıyoruz.

// Bu link tagini çok kullanılan bir yöntem olmamakla beraber public klasörünün içindeki index.html head bölümünde linklerin altına yerleştrebilriz. Tekrardan kodumuza döndüğümüzde font'un değiştiğini de görebiliyoruz.

// Bunu yaptıktan sonra Bootstrap'e gidip bir tanımı alıp App.js'de div'in içinde en alta bir yere yerleştiriyoruz.

//-------------------------------------------------------------------------------------------------------------------

// Module CSS

// Bu derste module Css kavramından bahsedilecek. Buna neden ihtiyacımız olduğunu bilmek için problemin ne olduğunu anlamamız lazım. Onun için 2 tane component yazıcaz ve bu componentlerde 2 tane ayrı ayrı CSS tanımı import edilecek. Ve bu CSS tanımlarının içinde de aynı class name'lerine sahip 2 tane 1'er eleman olacak ve sonrasında sonucun ne oldugunu görmeye çalışcaz.

// Ben aynı componentin içine A ve B adında 2 tane dosya açıp içlerine index.js ve style.css adında birer dosya açtığım zaman ve birinin css'ini rengini red diğerininkini green yaptığımda her ikisininde renginin green oldugunu ekranda gördüm. İki tane aynı still tanımından oluşturduğumuz zaman önceki siliniyor yeni oluşturulan işleniyor. 

// İkisini de title yapmak yerine bir tanesini titlex yapsaydık düzelirdi.

// Ama ben her ikisindede aynı ismi kullanmak istersem class isimlerini unique hale getirmeliyim. Burda da karşımıza module css kavramı çıkıyor.

// Ne yapmamız gerekiyor?

//1. still dosyalarını olustururken dogrudan css dosyası değilde dosya ismini yazdıktan sonra module tanımını eklersek problemimizi çözeriz. styles.module.css gibi styles.css yerine.

// Ve verdiğimiz isimleri logladıgımızda 
// A {title: 'styles_title__AyeDg'}
// B {title: 'styles_title__1slys'}
// çıktılarını alırız yani 2 farklı çıktı. Yani burda 2 farklı id olduğunu görebiliyoruz. Biz bu id'leri kullandıgımız zaman artık herhangi bir problem yaşamayacagız.

// peki bu isimleri nasıl vericez. direk className="title" demek yerine süslü parantezin içinde import yaptığımız isimle birlikte yazıcaz yani className={styles.title} gibi.

// Module CSS tanımı yapmanın sağladığı en büyük fayda nedir? Benzersiz still isimleri olusturarak olası CSS çakışmalarının önüne geçer.
