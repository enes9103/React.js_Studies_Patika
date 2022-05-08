// Ne Geliştireceğiz?

// Bir telefon rehberi uygulaması olusturacagız.

// Componentlerimizi component dizini altına olustururken dosya ve dizin yapılandırmasını isimlendirmesini hiyerarşisini düzgün bir şekilde kurmamız gerekiyor. Bu derse kadar bir components dizinine bir dizi açıp onu çağırıp kullanmıştık ama componentlerimizin ihtiyaç duyduğu birden fazla dosya olabiliyor still, query, validation dosyaları gibi bunları ayırmış olabiliriz. Dolayısıyla componentin ihtiyaç duyacağı kendi içindeki bütün tanımları tek bir dizin altında toplamak en mantıklı olanı.

// - App.js dosyamıza contact componentimizi render ettik.
// - Contact componentinin altı iki parçadan oluşuyor. 1- listenin olduğu component 2- Form'un olduğu component bu formdan bir şey eklendiğinde yukardaki listeye ekleniyor. State'imiz contact componentinde duruyor ve burdan alttaki list ve form componentine dağıtılıyor.

// State'i contact'da değilde liste tanımlasaydık o list'den dışarı çıkarıp yani bir üst componente çıkarıp tekrar forma indirmem gerekirdi o yüzden state'i tanımlamak için en doğru yer burası ve burada tanımladık.

// Forma gidelim, formu hazırlarken bizim fullName ve phone number adında 2 tane inputumuz var bunlar initial value'larımız  inputlarımızı tanımlayıp onlara atama yapacak olan statelerimizi tanımladık. İnputta herhangi bir değişiklik olduğu anda onchangeinput çalışıyor setForm ile atama işlemleri gerçekleşiyor. Sonrasında onSubmit ile içersi boşşa yani bir şey yazılmamışsa işlemi durdurduk doluysa kaydı ekle dedik. 

// AddContact form componentine prop olarak geçiliyor. 

// List componentinde listeliyoruz ve yukarda bir inputumuz var inputtan herhangi bir string girildiği anda listemize arama işlemi yapıyoruz her karektere basıldığında bu listeleme işlemi gerçekleşiyor

