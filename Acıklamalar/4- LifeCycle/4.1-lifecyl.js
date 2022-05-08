// useEffect

// Bu react componentleri üzerindeki yaşam döngülerini öğrenmeye çalışıcaz. Componentler DOM' a maunt olduğu anda componentin üzerindeki bir state değiştiği anda veya unmount olduğu anda biz bu durumları yakalayıp o durumlara göre bir takım işlemler yaptırabiliyoruz.

// Bölüm Sonu Kazanımları

// Componentlerde insanlar gibi doğuyorlar yani Mount oluyorlar yaşıyorlar üzerinde state değişiyor bir takım işlemler yapılıyor vs ve unmount olduğu andada ölüyorlar.

// Mount olma anı neden önemli olabilir? Mesela component mount olduğu anda gidip bir veri kaynağından veri çekip onu göstermek isteyebiliriz mount olma anı genelde bu tip işlemler için kullanılır. Component mount olur olmaz olması gereken işlemler burada yapılır.

// Biz bir yaşam döngüsü tanımı yapabilmek için useEffect adındaki tanımı kullanıyoruz.

// mount olma anını useEffect fonksiyonun en altına dependency array yazarak anlayabiliyoruz, unmount olduğunda anlamak içinse en alta bir fonksiyon return ediyoruz bu da unmount olduğu anda çalışıyor.

// Peki unmounta ne zamn ihtiyacımız var? componentimizin ekranda göründüğünü düşünelim yani mount olmuş sonra bu component diyelim ki belirli aralıklarla güncelleniyor counter veya websoket örneği gibi. Eğer ben bir websoket bağlantısı olusturmus olsaydım oraya abone olmus olacaktım yani veri akıyor olacaktı. Biz bunu akışı durdurmazsak bu uygulamamızın yavaş çalışmasına neden olur zaten consoleda hatayı da görüyoruz.

// Genel olarak react'in hooking yapısı ilk geldiği günden beri seviliyor ve kullanılmaya devam ediyor.

// Component'ler üzerindeki her türlü yaşam döngüsü olayını useEffect hook'u ile yakalayıp işlem yapabiliriz. -> Doğru

// Component mount anını yakalamak için aşağıdaki kod bloklarından hangisi kullanılmalıdır? -> useEffect (() => {}, [])