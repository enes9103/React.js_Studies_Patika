// Real DOM

// Bir web sayfasına girdiğinizde ve developer tool'u açtığımızda (sağ tık inspect yaptığımızda) karşımıza çıkan hiyerarşik HTML etiketlerinin bütününe realDom diyoruz.

// Virtual DOM
// Virtual Dom denen şeyde real DOM'un bir kopyası. Sadece bu bir javascript objesi olarak tutuluyor React tarafında.

// Yaptığı şey bizim ekranımızda bir güncelleme olduğu anda mesela bir veri güncellenecek diyelim react gidiyor virtual DOM ve real DOM'u karşılaştırıyor. Eğer bunların arasında bir fark varsa sadece farklı olan kısmı getirip real DOM'a yazıyor. Bunu yapmasının nedeni gereksiz yere renderın önüne geçmek aslında.

// Aynı zamanda sadece güncellenmesi gereken alanların güncellenmesi aslında. O yüzden gerçek DOM'un bir clonu react tarafında tutuluyor, javascript objesi olarak. Sonrasında bir güncelleme olduğunda react'in kendi içersindeki farklılık algoritmaları çalıştırılıyor ve eğer bir farklılık varsa o farklılık getirilip real dom'a yansıtılıyor.