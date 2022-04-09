// Context bizim global state'i yönetmemizi sağlar. Peki global state nedir? Biz component bölümünden önce state'imizi bir componentin içinde bulunuyordu ve o state'i başka bir componentte kullanmak istediğimizde alt componentlere prop olarak gönderip kullanabiliyorduk fakat iç içe onlarca componentimiz olduğunu düşündüğümüzde birinci componentten en alttaki componente iletilene kadar aradaki 8 componentin tamamından geçmesi gerekecek ve bu durumun yönetimi oldukça sancılı ve zor. Dolayısıyla küçük bir proje yani 1 - 2 ekrandan oluşan bir proje değilse o zaman global state'i yönetecek bir araca ihtiyacımız var demektir. İşte burdada karşımıza context gibi araçlar çıkıyor.

// Context gibi global state yönetimini yapabilecek bir sürü araç var en az 10-15 tane araç var bunlardan en çok bilinenleri Redux. Ama içlerinde en basit syntax'a sahip olan kullanımı öğrenmesi en basit olan context.

// Redux oldukça zor çok basit bir Api kol yazmamız için bile bir kaç farklı dosyada kol yazmamız gerekebilir, dolayısıyla redux öğrenme ve uygulamam açısından zor.

// Bir context'i nasıl tamınlıyoruz? React'i import ettikten sonra bunun yanında createContext adında bir hook geliyor ve bunu çalıştırdığımızda context'imiz oluşmuş oluyor.

// Sonra bizim context'i kullanacağımız componentleri sarmalamamız lazım bu yazmış olduğumuz context ile. Bunuda App.js'de yapıyoruz. Bu işi mesela normalde app.js içinde <ThemeContext.Provider> şeklinde devam ederek yapıyorduk ve orda dataları sağlıyorduk. Daha sonra provider işini tek tek app.js'de yapmayalım onu da provider'ın içinde kullanalım dedik. Sonrasında ise ThemeProvider'ı hazırlamaya başladık.

// Yani <ThemeContext.Provider value={values}> { children } </ThemeContext.Provider> şeklinde Theme context sayfasında import ettik. Burdaki { children } ise o componentin içinde olan bütün componentleri buraya yerleştir anlamında. value kısmında ise sağlayacağımız dataları belirledik. value kısmına ne yerleştirirsek bu context'i kullanmak istediğimizde o verilere erişeceğiz demek oluyor.

// Sonra bu contextleri herhangi bir componentte nasıl kullanacağımızı konuştuk. Burda biz bir useTheme adında bir hook oluşturduk. Bu bizim context içersinde tanımladığımız extra bir hook. Biz bunu neden yaptık? useContext tanımını bu contextleri kullacağımız her dosyada her componentte react'in altındaki useContext'i kullanmak durumunda kalmayalım diye o işlemi tek seferde bitirmiş olduk. O yüzden böyle bir hook tanımlama ihtiyacımız oldu.

// Sonrasında da bize value kısmında sağlanan verileri useTheme() ile kullanmaya çalıştık. ve aldığımız theme verisini direk olarak componentimizde kullanmaya başladık.

// Buton componentinde ve Header componentinde aynı işlem yapılmış yani   const { theme, setTheme } = useTheme(); işlemi burda amacımız gerçekten 2 componentte birden aynı datayı görebiliyormuyuz buna bakmak. Yani bir veri değiştiği anda diğer componentlerde de aynı anda değişiyor mu? Eğer böyle bir şey yapmasaydık herhangi bir componentin içindeki state'i alıp yukarı çıkarmam sonrada ilgili componente tekrar geri indirmem gerekecekti prop olarak.

// Sonrasında login butonunu koyduk burdaki amacımız ise birden fazla context'i kullanabilir miyiz diye sorduk kendimize ve kullanabileceğimizi öğrendik. İlk createContext ile context'imizi tanımladık. Sonrada provider'ımızı tanımlıyoruz. Bir context'i tanımlarken aşağı yukarı yazacağımız kod bu şekilde. Syntax aynı sonrasında tek yapmamız gereken ilgili yerleri doldurmak. Burda gene o provider'ın içindeki componentler, elementler context'e gelebilsin diye children'ı oluşturduk.

// Daha sonra oluşturduğumuz context'i app.js'de sarmalamamız gerekiyor iç içe. Böylece istediğim veriye herhangi bir componentten zahmetsizce erişebiliyorum.

// Burda provider tanımlarının aslında birer component oldugunu unutma. Yani zaten lifecyle ve useState gibi tanımlardan anlaşılıyor. Yani herhangi bir componentte neler yapabiliyorsak aynılarını buradada yapabiliriz.

// Aynı zamanda theme datası değiştiği anda bunu local storage'a yazıyorum sonra da kullanıcı tekrar girdiği anda yani sayfa yenilendiği anda onu local storage'dan alıp hangi temayı kullanıyorsa onunla devam etmesini sağlıyorum.

// Context'i büyük ve orta ölçekli projelerde kulllanabiliriz.

// Context API, React çekirdeği içinde bulunan ve global state'i yönetmemizi sağlayan bir araçtır

// Context Provider'da value propuna geçilen değerler alt componentlere iletilir.

// Bir React uygulaması içinde birden fazla Context tanımı yapmak mümkündür.
