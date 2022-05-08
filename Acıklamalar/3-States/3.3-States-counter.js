// import {useState} from 'react'

// function Counter() { 
//   const [count, setCount] = useState(0); 

// const increase = (() => {
//   setCount(count + 1)
// })
//   return (
//     <div>
//     <h1>{count}</h1>
//     <button onClick = {increase}>increase</button>
//     <button onClick = {() => setCount(count - 1)}>decrease</button>
//     </div> ) 
//     } // her zaman yapmamız gereken işlemler setCount(count + 1) fonksiyonu kadar kısa olmuyor bu yüzden dışarı yazmamız gereken durumlarda olabiliyor. increase fonksiyonunu bu yüzden dışarı yazdık, görebilmemiz açısından.

// export default Counter

// rfce + tab ile hızlı bir şekilde oluşturabiliriz.

// Bu component'i istersek app.js componentinde ya da kullanırız index.js'de kullanabiliriz, import ederek.

//--------------------------------------------------------------------------------------------------------------------

// Re-Render Mantığını Anlamak (React vs jQuery)

// React componentleri içersindeki re-render yani yeniden render etmek mantığını anlayabilmek için aynı örneği hem jquery hem de react ile yapmaya çalışalım.Sonrasında bu örneklerin ilgili web sayfasını nasıl render ettiğini görmeye anlamaya çalışcaz. Aralarındaki farkı görmeye anlamaya çalışcaz.

// Bizim zaten react ile yapmış olduğumuz bir sayaç uygulaması var bunun benzerinide jquery ile yapmaya calışıcaz. Bunlar butona basıldıktan sonra ekrandaki verilerde ne gibi farklılıklar oluyor anlamaya çalışalım.

import {useState} from 'react'

function Counter() { 
  const [count, setCount] = useState(0); 

const increase = (() => {
  setCount(1)
})
  return (
    <div>
    <h1>{count}</h1>
    <button onClick = {increase}>increase</button>
    <button onClick = {() => setCount(count - 1)}>decrease</button>
    </div> ) 
    } 

export default Counter

// jquery'nin sayacına baktığımızda her basışımızda sayı değişmese bile render ediliyor. Yani gereksiz bir render edilme işlemi var. Reacte ise butona basıldığında sadece ilk seferde 1 yapıyor daha sonraki kısmı render etmiyor. Bu farkı bilmek bundan sonraki react geliştirme kariyerimizde oldukça önemli. Bir react uygulaması geliştirirken en dikkat etmemiz gereken konulardan biri gereksiz renderların önüne geçmek. Bu örnekte react bunun önüne geçebiliyor ama önüne geçemediği durumlarda var bunu memories konusunda incelicez.