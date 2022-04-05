// React.memo

// import React from 'react'

// function Header( {number} ) {
//     console.log("Header Component Re-rendered!");
//     return (
//         <div>
//             Header - {number}
//         </div>
//     )
// }

// export default React.memo(Header)

// reactte gereksiz render'ın önüne geçmek için export ederken React.memo() ile sarmaladık. Ve butona basınca Render'dan etkilenmedi sadece bir kez render edildi o da DOM'da Header yazısını göstermek için.

// Peki Header ne zaman render edilecek Header'a geçtiğimiz propertyler ne zaman değişirse işte o zaman yeniden render edilir. 

// Ben App.js'den number props'unu alarak Header componentinde kullandım dolayısıyla Header componentinin aldığı propertyler değişti ve butona her tıkladığımızda property'lerden dolayı Header componenti render edileceği için ekrana her butona bastığımızda Header Component Re-rendered! yazısı göründü.

// sayac header componentinde 5'e varınca kadar render edilmesin daha sonra edilsin dersek 5'e varınca kadar console'da yazı görünmeyecek sonra header componenti render edildiği için yazı görünmeye başlaycak.

// Yani gelen proplar karşılaştırılır aynı ise baştan render edilmez farklı ise re-render olur.

// React.memo kullanılarak dışa aktarılan component'in re-render edilmesi için hangi şartın gerçekleşmesi gerekir? 
// Componente gönderilen proplar değişmiş olmalı.

//-------------------------------------------------------------------------------------------------------------------

// useMemo

// import React from 'react'

// function Header( { number, data } ) {
//     console.log("Header Component Re-rendered!");
//     return (
//         <div>
//             Header - {number}

//             <br /><br />

//             <code>{JSON.stringify(data)}</code>
//         </div>
//     )
// }

// export default React.memo(Header)

// Biz önceki derste React.memo() ile sarmaladığımız bir componentte verdiğimiz componentler değişmediği sürece o component baştan render olmaz demiştik. Burda gönderdiğimiz prop içinde name adında bir field var ve ifade ettiği değerde aynı Mehmet bir şey değişmiyor peki neden her defasında bu component render oluyor.

// Normalde 
// false === false // true
// true === true // true
// 5 === 5 // true
// " " === " " // true
 
// Biz bir objenin başka bir objeye denkliğini sorgulamaya çalışırsak burda karşımıza farklı bir durum çıkar yani

// {} === {} // false dur. Çünkü her objenin bellek üzerindeki referansları farklıdır dolayısıyla bunların bellek üzerindeki referanslarını sorguladığımız zaman false çıktısı geliyor.

// [] === [] // false

// Yani her butona tıklandığında data'nın bellek üzerindeki referansı değişiyor. Bu referans değiştiği ve prop olarak geçildiği için react memo gerekli sorgulamayı yapıyor. Proplar değişmiş mi değişmemiş mi diye. Ve false çıktısını aldığı ve denk olmadığını anladığı için de tekrardan render ediyor.

// Peki bundan nasıl kurtulcaz?

// Olusturduğumuz data'yı componentin dışında bir yerde yazabiliyorsak propblemden kurtulmuş olacağız   .

//-------------------------------------------------------------------------------------------------------------------

// useCallback  

import React from 'react'

function Header( { number, increment } ) {
    console.log("Header Component Re-rendered!");
    return (
        <div>
            Header - {number}

            <br /><br />

            <button onClick={increment}>Click</button>
            
        </div>
    )
}

export default React.memo(Header)
