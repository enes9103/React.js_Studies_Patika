// Neden Test Yazarız?

// Bu bölümde react componentleri için unit test yazmayı öğreneceğiz. Peki neden unit test yazmaya ihtiyaç duyarız?

// Diyelim ki bir uygulama geliştiriyoruz kayıt formu var giriş formu var. Giriş yapıldıktan sonra da bir takım işlemler yapılmaya devam ediliyor. Giriş ve kayıt olma gibi 15-20 tane daha fonksiyon yada component olduğunu düşünelim.

// Diyelim önce kayıt formunu yaptık bu güzel bir şekilde çalışıyor test ettik onayladık herhangi bir problem yok sonra giriş formunu yapmaya başladık bunu da test ettik onayladık problem sonra x y z diye bir sürü component yapmaya devam ettik. Bizim günün sonunda bir sürü componentimiz olacak bunların her biri başka başka işler yapıyor olacak.

// Biz ilkten kayıt formunu hazırladığımızda gerekli kodları yazdık sonra baktık greçekten kayıt ediyor mu etmiyor mu gerçekten kayıt ettiğini görünce ordaki işlemleri tamamladığımızı düşünüp giriş formunu yapmaya geçtik.

// Peki biz ortada ki bir yerdeki  componentti hazırlarken istemeden kayıt formuna yada giriş formuna bir zarar verdiysek yani onun doğru şekilde çalışmasını etkileyecek bir şey yapmış olabilriz belki. Veya son componenti yapıyoruz mesela onu yaparken gidip sistemin tamamına bakmamız lazım deploy etmeden önce acaba gerçekten kayıt ediyor mu bakmalıyız. Gerçekten giriş yapıyor mu ? giriş yaptıktan sonra x işlemini yapıyor mu diye tüm componentlere bakmamız lazım ki uygulamamızı deploy edebilelim.

// Yukardaki tek tek kontrol etme işin manuel tarafı ve biz bu manuel yapılan tarafı otomatize edebiliriz. Yani her bir birimin kendi içinde doğru çalışıp çalışmadığını otomatize ettirecek kodu yazabiliriz. Dolayısıyla biz her deploy yapmadan önce gidip sistemin tamamı çalışıyor mu alışmıyor mu diye kontrol etmemize gerek kalmayacak. Bu işlemi zaten bizim için yapacak bir kod bloğu olacak. işte biz bu gerekli otomasyon işlemleri için test yazmamız gerekiyor diyoruz.

// Test yazmanın çeşitleri var ama biz bu işin unit test kısmında olacağız, her componentin kendi biriminde doğru çalıştığına emin olmaya çalışacağız. Bunun için gerekli kodları yazmaya özen göstereceğiz.

// yarn test yazıp sonrasında a'ya bastığımızda  .test.js ile biten dosyaları buluyor ve onların altındaki test kodlarını çalıştırıyor.

// Bir test kodu yazmadan önce dikkat etmemiz gereken şey yazmamız gereken şey componentinIsmi.test.js'dir.

// App.test.js'nin yaptığı şey App componentinin çalışıp çalışmadığını anlamak.

// Burda test App componentini render ediyor App componentinin gerçekten doğru çalışıp çalışmadığını anlamak için.

// Sonrada bizim ilk sayfamız açıldığında bir link görünüyor Learn React diye bu linkin gerçekten burada var olup olmadığını test ediyor. Burada screen.getByText ifadesiyle o nesneyi bulmaya çalışıyor. Yani içinde learn react geçen ifadeyi bulmaya çalışıyor.

//Bunu bulduktan sonra da link elementinin doküman içinde var olduğuna emin olmak istiyorum diyor. Burdan eğer true geliyorsa testi geçtiniz diyor false gelirse o test patlıyor
