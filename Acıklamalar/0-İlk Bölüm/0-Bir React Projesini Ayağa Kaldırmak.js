// Bir React uygulaması oluşturmak için bazı bağımlılık ve gereksinimlere ihtiyaç duyuyoruz. Bunların içerisinde hem modüler bileşenler oluşturmak için kullanılan zorunlu paketler (react, react-dom) hem de konfigürasyon dosyaları (webpack, babel) yer alıyor. Bunların hepsini ve daha fazlasını bizim için yapan bir araç olan create-react-app ile kolay ve hızlı bir şekilde bir React.js uygulaması oluşturmak mümkün. Bu araç React ekibi tarafından sunuluyor ve hem React öğrenmeye yeni başlayanlar hem de belirli ölçekte proje geliştirmek isteyenler için hazır bir iskelet yapı sağlıyor. Bu sayede Babel, webpack gibi bağımlılıkları manuel olarak konfigüre etmeye gerek kalmadan hızlıca bir React.js uygulaması geliştirmeye başlayabiliyoruz.

// *** pwd komutu ile bulunduğumuz dizini görüntüleyebiliriz. (MacOS ve Linux için geçerli)
// *** cd komutu ile uygulamanın oluşturulmasını istediğimiz klasöre gidebiliriz.
// *** mkdir komutu ile yeni bir klasör oluşturabiliriz.

// Buradan da anlaşılabileceği üzere App adında bir bileşeni görüntülüyoruz. Bileşenleri (component) React'in yapı taşları olarak düşünebiliriz. Dolayısıyla bir bileşen aslında bir JavaScript sınıfı (class) ya da fonksiyonudur. Bir React uygulaması tasarımına bağlı olarak birkaç ya da binlerce bileşenin bir araya gelmesiyle oluşabilir. Tasarım ilkelerine göre bu sayının çok fazla büyüyebileceğini söyleyebiliriz.

// Create React App içerisinde sunulan bazı özellikler:

// Hot reloading: kod üzerindeki değişikleri kaydettikten sonra uygulamayı baştan başlatmadan değişikliklerin arayüze yansıması
// ESLint: kodun belirli standartlara göre yazılmasını sağlayan modül
// Canlı ortam (production) için kodun optimize edilmesi (build scripti aracılığıyla)

// Burada src klasörü altında olan App.js ekranda gösterilen bileşen, index.js React uygulamasının başlangıç noktasıdır. *** index.js bütün React uygulamasının nerede render edileceğini belirler. *** Bu dosyaya gidip incelediğimizde 'root' id ile belirtilmiş bir HTML etiketine bütün uygulamanın render edileceğini görebiliriz. public klasörü altında index.html'e gittiğimizde ise bu bahsettiğimiz 'root' id'li <div> etiketini görebiliriz.

// public/: Bu klasör React uygulamamızın static asset'lerini içeriyor. (index.html gibi)

// src/: Bu klasör React uygulamamızın JavaScript dosyalarını içeriyor. Burada bütün uygulamanın başlangıç noktası olan index.js ve App adlı bileşeni (component) içeriyor.

// node_modules/: Bu klasör içerisinde projenin bütün bağımlılıkları (Node.js Paket Yöneticisi - npm kullanılarak indirilen paketler) yer alıyor.

// package.json: Bu dosya bir tür manifest dosyasıdır. Projenin ismini, versiyonunu, manuel scriptleri ve projeye dahil edilen bütün paketlerin listesini (versiyonlarıyla birlikte) içerir. package-lock.json dosyası ise her paketin birebir sürümlendirilmiş bağımlılık ağacını tutar. Böylece diğer geliştiriciler ve proje sürümleri için garanti edilmiş versiyonlar saklanır.

// .gitignore: Bu dosya sayesinde istenmeyen uzantıdaki ve dizindeki dosyaların takip edilmesini engellemiş oluruz. Böylece git sunucularına göndermek istemediğimiz dosyalar takip edilmez. create-react-app ile node_modules klasörü altındaki paketler ve build klasörü .gitignore içerisinde belirtilmiş olarak gelir.

// Uygulamayı geliştirme aşamasında start script'ini kullanarak sunucuyu başlatmaktan ve uygulamanın ayağa kaldırılmasından bahsetmiştik. create-react-app'in sunmuş olduğu bir diğer önemli script ise build. React modüler bir yapı sunuyor ve birçok bileşenden oluşan uygulamalar ortaya çıkıyor. Build scripti oluşturulan bütün ayrı bileşenleri birleştirilip küçültülüyor ve optimize hale getiriyor. Bu sayede canlı ortama (production) alınabilecek bir uygulamaya sahip oluyoruz.

//src index.js'de daha önce gördüğümüz react dom dediğimiz kütüphane react native geliştirilmeden önce react'in içindeydi  react dom dediğimiz şey sadece web ile alakalı. Şu an ayrı bir kütüphane haline geldi. app componenti app.js'den import edilmiş. Sonra reactDom altındaki render methodunu kullanarak app componentini vermiş. documentgetelementId root diyerek index.html'deki root'a ulasıyor, ve o divin içersine app componentini yerleştiriyor.

// index.html'in işlevi varsayılan bir html dosyasındaki üzerindeki bir html etiketine bizim yamış olduğumuz componenti aktarıyor. 